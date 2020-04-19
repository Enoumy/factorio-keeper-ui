import { Component, OnInit, Input } from "@angular/core";
import { BlueprintsService } from "../blueprints.service";

const image_server_url = "http://localhost:3000";

interface Summary {
  title?: string;
  description?: string;
  created_by?: string;
  image_url?: string;
  created_date?: string;
}

@Component({
  selector: "app-summary-card",
  templateUrl: "./summary-card.component.html",
  styleUrls: ["./summary-card.component.css"]
})
export class SummaryCardComponent implements OnInit {
  _blueprint_id: string | number;

  get blueprint_id(): string | number {
    return this._blueprint_id;
  }

  @Input("blueprint_id") set blueprint_id(value: string | number) {
    this._blueprint_id = value;
    this.fetchBlueprintSummary(value);
  }

  summary_data: Summary;

  constructor(private blueprintsService: BlueprintsService) {}

  ngOnInit() {}

  fetchBlueprintSummary(id: string | number) {
    this.blueprintsService.fetchBlueprintSummary(id).subscribe(data => {
      console.log(data);
      this.summary_data = {};
      if (data["title"]) this.summary_data.title = data["title"];
      if (data["created_date"]) {
        this.summary_data.created_date = data["created_date"];
      }
      if (data["description"]) {
        this.summary_data.description = data["description"];
      }
      if (data["created_by"]) {
        this.summary_data.created_by = data["created_by"];
      }
      if (data["images"]) {
        if (data["images"].length === 0) {
          this.summary_data.image_url = "/assets/noimage.png";
        } else {
          this.summary_data.image_url =
            image_server_url + "/image/" + data["images"][0];
        }
      }
      console.log("Image url: " + this.summary_data.image_url);
    });
  }
}
