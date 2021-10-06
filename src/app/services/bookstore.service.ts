import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_API_URL } from '../app-injection-tokens';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  private baseApiUrl = `${this.apiUrl}/api/`
  constructor(
    private httpClient: HttpClient,
    @Inject(STORE_API_URL) private apiUrl:string
  ) {}

  getCatalog(): Observable<Book[]> {
    console.log('book getCatalog works');
    return this.httpClient.get<Book[]>(`${this.baseApiUrl}books`)
  }

  getOrders(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseApiUrl}orders`)
  }
}
