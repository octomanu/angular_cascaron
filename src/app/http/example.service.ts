import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ExampleService {
  private path = `${environment.api}/example`;
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.path);
  }
  find(id: string) {
    return this.http.get(`${this.path}/${id}`);
  }

  post(data: any) {
    return this.http.post(this.path, data);
  }
  put(id: string, data) {
    return this.http.post(`${this.path}/${id}`, data);
  }
  delete(id: string) {
    return this.http.get(`${this.path}/${id}`);
  }
}
