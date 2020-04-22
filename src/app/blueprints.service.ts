import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

const server_url: string = "http://localhost:3000";

@Injectable({
  providedIn: "root"
})
export class BlueprintsService {
  constructor(private http: HttpClient) {}

  fetchBlueprints() {
    return this.http.get(server_url + "/blueprints");
  }

  fetchBlueprintSummary(blueprint_id: string | number) {
    return this.http.get(
      server_url + "/blueprint/" + blueprint_id + "/summary"
    );
  }

  fetchBlueprint(blueprint_id: string | number) {
    return this.http.get(server_url + "/blueprint/" + blueprint_id);
  }

  fetchBlueprintStrings(blueprint_ids) {
    let params = new HttpParams();
    params = params.append("blueprint_ids", blueprint_ids);
    return this.http.get(server_url + "/blueprint_strings/", {
      params: params
    });
  }
}
