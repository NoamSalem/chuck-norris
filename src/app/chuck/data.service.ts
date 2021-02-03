import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from '@shared/types';

interface Res<T> {
  total: number;
  result: T[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly baseUrl: string = 'https://api.chucknorris.io/jokes';

  constructor(private readonly http: HttpClient) { }

  public getCategories(): Observable<string[]> {
    const url = `${this.baseUrl}/categories`;

    return this.http.get(url).pipe(map((categories: string[]) => categories));
  }

  public search(query: string): Observable<Quote[]> {
    const url = `${this.baseUrl}/search`;

    return this.http.get(url, { params: { query } }).pipe(map((res: Res<Quote>) => res.result));
  }

  public getRandomQuote(name: string, categories: string): Observable<Quote> {
    const url = `${this.baseUrl}/random`;

    return this.http.get(url, { params: { name, category: categories } }).pipe(map((quote: Quote) => quote));
  }
}
