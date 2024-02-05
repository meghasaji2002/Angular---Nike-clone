import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  constructor(private http:HttpClient) { }

  base_URL = 'https://nike-jsonserver.onrender.com'

  fetchData(){
    return this.http.get(`${this.base_URL}/shoes`)
  }
}
