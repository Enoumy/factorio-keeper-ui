import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";

interface UserData {
  username: string;
  created_date: string;
  blueprints: number[];
}

@Component({
  selector: "app-profile-view",
  templateUrl: "./profile-view.component.html",
  styleUrls: ["./profile-view.component.css"]
})
export class ProfileViewComponent implements OnInit {
  user_id: string;
  user_data: UserData;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.user_id = this.route.snapshot.paramMap.get("profile_id");
    this.fetchUser(this.user_id);
  }

  fetchUser(id: string) {
    this.usersService.fetchUser(id).subscribe((data: UserData) => {
      console.log(data);
      this.user_data = data;
    });
  }
}
