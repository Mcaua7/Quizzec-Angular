import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  private apiUrl = "https://api.jsonbin.io/v3/b/674f426ae41b4d34e45f34e2";
  headers = new HttpHeaders()
    .set('X-Access-Key', '$2a$10$gCSm9EzP4f4OevslF6w/oe6rwH0ninVR0BZrSOHyTxw1OR/6EbVj.')
  

  constructor(private http: HttpClient) { }

  //busca dados da api
  getData(){
    const url = `${this.apiUrl}`;
    return this.http.get(url, {'headers': this.headers})
  }
}
