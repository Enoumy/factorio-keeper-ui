import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BlueprintsService } from "../blueprints.service";

@Component({
  selector: "app-blueprints-list",
  templateUrl: "./blueprints-list.component.html",
  styleUrls: ["./blueprints-list.component.css"]
})
export class BlueprintsListComponent implements OnInit {
  blueprint_ids;

  constructor(
    private blueprintsService: BlueprintsService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.router.url);
    this.fetchBlueprints();
  }

  fetchBlueprints() {
    this.blueprintsService.fetchBlueprints().subscribe(data => {
      console.log(data);
      this.blueprint_ids = data;
    });
  }
}
