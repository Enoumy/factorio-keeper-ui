import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";

const server_url = "http://localhost:3000/own";

interface DialogData {
  blueprint_id: string;
}

@Component({
  selector: "app-add-dialog",
  templateUrl: "./add-dialog.component.html",
  styleUrls: ["./add-dialog.component.css"]
})
export class AddDialogComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      username: [""],
      pin: [""]
    });
  }

  submitForm() {
    console.log(this.form.value);

    let data = {};
    data["username"] = this.form.get("username").value;
    data["pin"] = this.form.get("pin").value;
    data["blueprint_id"] = this.data.blueprint_id;

    console.log(data);

    this.http.post<any>(server_url, data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
