import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";
import { BlueprintsService } from "../blueprints.service";
import { MatSnackBar } from "@angular/material/snack-bar";
const Blueprint = require("factorio-blueprint");
import copy from "copy-to-clipboard";

interface UserData {
  username: string;
  created_date: string;
  blueprints: number[];
}

function blueprintStringsToBlueprintBook(blueprint_strings: string[]): string {
  let real_blueprints: any[] = [];
  for (let i = 0; i < blueprint_strings.length; i++) {
    try {
      let blueprint = new Blueprint(blueprint_strings[i]);
    } catch (err) {
      continue;
    }

    if (Blueprint.isBook(blueprint_strings[i])) {
      let book_blueprints = Blueprint.getBook(blueprint_strings[i]);
      for (let j = 0; i < book_blueprints.length; j++) {
        real_blueprints.push(new Blueprint(book_blueprints[j]));
      }
    } else {
      real_blueprints.push(new Blueprint(blueprint_strings[i]));
    }
  }

  return Blueprint.toBook(real_blueprints);
}

@Component({
  selector: "app-profile-view",
  templateUrl: "./profile-view.component.html",
  styleUrls: ["./profile-view.component.css"]
})
export class ProfileViewComponent implements OnInit {
  user_id: string;
  user_data: UserData;
  found: boolean;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private blueprintsService: BlueprintsService,
    private _snackBar: MatSnackBar
  ) {
    this.found = true;
  }

  ngOnInit() {
    this.user_id = this.route.snapshot.paramMap.get("profile_id");
    this.fetchUser(this.user_id);
  }

  fetchUser(id: string) {
    this.usersService.fetchUser(id).subscribe(
      (data: UserData) => {
        console.log(data);
        this.user_data = data;
        if (!data) {
          this.found = false;
          this._snackBar.open("User " + id + " not found!", "close");
        }
      },
      err => {
        this.found = false;
        this._snackBar.open("User " + id + " not found!", "close");
      }
    );
  }

  copyBlueprintBookString() {
    console.log("copyBlueprintBookString()");
    this.blueprintsService
      .fetchBlueprintStrings(this.user_data.blueprints)
      .subscribe(
        (blueprint_strings: string[]) => {
          console.log(blueprint_strings);
          let book_string: string = blueprintStringsToBlueprintBook(
            blueprint_strings
          );
          copy(book_string);
          this._snackBar.open("Blueprint book copied!", "close", {
            duration: 3000
          });
        },
        error => {
          console.log(error);
          this._snackBar.open("Error retrieving blueprint book!", "close", {
            duration: 3000
          });
        }
      );

    console.log(this.user_data.blueprints);
  }
}
