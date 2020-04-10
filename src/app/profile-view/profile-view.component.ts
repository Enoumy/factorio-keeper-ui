import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile-view",
  templateUrl: "./profile-view.component.html",
  styleUrls: ["./profile-view.component.css"]
})
export class ProfileViewComponent implements OnInit {
  user_id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user_id = this.route.snapshot.paramMap.get("profile_id");
  }
}
