import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlueprintsService } from "../blueprints.service";
import copy from "copy-to-clipboard";

const image_server_url: string = "http://localhost:3000";

interface BlueprintData {
  blueprint_string?: string;
  title?: string;
  created_by?: string;
  created_date?: string;
  description?: string;
  image_urls?: string[];
}

@Component({
  selector: "app-blueprint-view",
  templateUrl: "./blueprint-view.component.html",
  styleUrls: ["./blueprint-view.component.css"]
})
export class BlueprintViewComponent implements OnInit {
  blueprint_id: string | number;
  blueprint_data: BlueprintData;

  constructor(
    private route: ActivatedRoute,
    private blueprints_service: BlueprintsService
  ) {}

  ngOnInit() {
    this.blueprint_id = this.route.snapshot.paramMap.get("blueprint_id");
    console.log(this.blueprint_id);
    this.fetchBlueprint(this.blueprint_id);
  }

  fetchBlueprint(id: string | number) {
    this.blueprints_service.fetchBlueprint(id).subscribe(data => {
      console.log(data);
      this.blueprint_data = {};
      if (data["blueprint_string"]) {
        this.blueprint_data.blueprint_string = data["blueprint_string"];
      }
      if (data["title"]) this.blueprint_data.title = data["title"];
      if (data["created_date"]) {
        this.blueprint_data.created_date = data["created_date"];
      }
      if (data["description"]) {
        this.blueprint_data.description = data["description"];
      }
      if (data["created_by"]) {
        this.blueprint_data.created_by = data["created_by"];
      }
      if (data["images"]) {
        if (data["images"].length === 0) {
          this.blueprint_data.image_urls = ["/assets/noimage.png"];
        } else {
          this.blueprint_data.image_urls = [];
          for (let i = 0; i < data["images"].length; i++) {
            this.blueprint_data.image_urls.push(
              image_server_url + "/image/" + data["images"][i]
            );
          }
        }
      }

      console.log(this.blueprint_data);
    });
  }

  copyBlueprintString(event) {
    copy(this.blueprint_data.blueprint_string);
  }
}
