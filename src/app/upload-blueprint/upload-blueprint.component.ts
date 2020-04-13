import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-upload-blueprint",
  templateUrl: "./upload-blueprint.component.html",
  styleUrls: ["./upload-blueprint.component.css"]
})
export class UploadBlueprintComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      username: [""],
      pin: [""],
      title: [""],
      blueprint_string: [""],
      description: [""],
      files: [null]
    });
  }

  ngOnInit() {}

  uploadFiles(event) {
    const files = (event.target as HTMLInputElement).files;
    this.form.patchValue({ files: files });
    this.form.get("files").updateValueAndValidity();
  }

  submitForm() {
    console.log(this.form.value);
  }
}
