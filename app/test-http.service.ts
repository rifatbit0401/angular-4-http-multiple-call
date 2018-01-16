import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestHttpService {

  constructor(private http: HttpClient) { }

  getAllItem(): Observable<Item[]>{
    return this.http.get<Item[]>("http://localhost:5000/api/getAllItems");
  }

  getItem(id: number): Observable<Item>{
    let params = new HttpParams();
    params = params.append("id", id.toString());
    return this.http.get<Item>("http://localhost:5000/api/getItemById", {params: params});
  }
    

  }

export class Item{
  id: number;
  name: string;
}
