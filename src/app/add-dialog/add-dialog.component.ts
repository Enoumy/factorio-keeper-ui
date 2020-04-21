import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

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
    private http: HttpClient,
    private _snackBar: MatSnackBar
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
        this._snackBar.open("Blueprint has been added!", "close", {
          duration: 3000
        });
      },
      error => {
        console.log(error);

        let message =
          "Incorrect pin, try making a new user profile and transferring previous blueprints";
        if (error.status === 200) {
          message = "Blueprint has been added!";
        }
        this._snackBar.open(message, "close", { duration: 3000 });
      }
    );
  }
}
