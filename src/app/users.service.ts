import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const server_url: string = "http://localhost:3000";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  fetchUser(username: string) {
    return this.http.get(server_url + "/user/" + username);
  }
}
