import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

const server_url = "http://localhost:3000/upload";

async function fileToByteArray(file) {
  let byte_array = [];
  try {
    let arrayBuffer = await file.arrayBuffer();
    let array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < array.length; i++) byte_array.push(array[i]);
  } catch {}
  return byte_array;
}

async function fileArrayToImageArray(file_array: any[]) {
  let out: any[] = [];
  try {
    for (let i = 0; i < file_array.length; i++) {
      out.push({
        buffer: await fileToByteArray(file_array[i]),
        type: file_array[i]["type"]
      });
    }
  } catch (err) {
    console.log(err);
  }
  return out;
}

@Component({
  selector: "app-upload-blueprint",
  templateUrl: "./upload-blueprint.component.html",
  styleUrls: ["./upload-blueprint.component.css"]
})
export class UploadBlueprintComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      username: [""],
      pin: [""],
      title: [""],
      blueprint_string: [""],
      description: [""],
      images: [null]
    });
  }

  ngOnInit() {}

  uploadFiles(event) {
    const files = (event.target as HTMLInputElement).files;
    this.form.patchValue({ images: files });
    this.form.get("images").updateValueAndValidity();
  }

  submitForm() {
    console.log(this.form.value);

    let data = {};
    data["username"] = this.form.get("username").value;
    data["pin"] = this.form.get("pin").value;
    data["title"] = this.form.get("title").value;
    data["blueprint_string"] = this.form.get("blueprint_string").value;
    data["description"] = this.form.get("description").value;

    data["images"] = this.form.get("images").value
      ? this.form.get("images").value
      : [];

    fileArrayToImageArray(data["images"]).then(value => {
      data["images"] = value;
      console.log("data:");
      console.log(data);
      this.http.post<any>(server_url, data).subscribe(
        response => {
          console.log("hi");
          console.log(response);
          this._snackBar.open("Blueprint uploaded successfully!", "close", {
            duration: 3000
          });
        },
        error => {
          console.log("hi");
          console.log(error);
          console.log(error.status);
          for (let key in error) {
            console.log(key);
          }

          let message = "Error posting data";

          if (error.status === 0) {
            message += ": backend server not found!";
          } else if (error.status === 400) {
            message += ": invalid form data, check title and blueprint_string";
          } else if (error.status === 401) {
            message += ": unauthorized permission for " + data["username"];
          }

          if (error.status === 200) {
            message = "Blueprint uploaded successfully!";
          }

          this._snackBar.open(message, "close", { duration: 3000 });
        }
      );
    });
  }
}
