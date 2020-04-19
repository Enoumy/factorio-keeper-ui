import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const server_url = "http://localhost:3000";

@Injectable({
  providedIn: "root"
})
export class BlueprintsService {
  constructor(private http: HttpClient) {}

  fetchBlueprints() {
    return this.http.get(server_url + "/blueprints");
  }
}