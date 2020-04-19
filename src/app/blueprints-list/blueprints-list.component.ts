import { Component, OnInit } from "@angular/core";
import { BlueprintsService } from "../blueprints.service";

@Component({
  selector: "app-blueprints-list",
  templateUrl: "./blueprints-list.component.html",
  styleUrls: ["./blueprints-list.component.css"]
})
export class BlueprintsListComponent implements OnInit {
  blueprint_ids;

  constructor(private blueprintsService: BlueprintsService) {}

  ngOnInit() {
    this.fetchBlueprints();
  }

  fetchBlueprints() {
    this.blueprintsService.fetchBlueprints().subscribe(data => {
      console.log(data);
      this.blueprint_ids = data;
    });
  }
}
