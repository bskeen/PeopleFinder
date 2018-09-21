import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable } from 'rxjs';
import { ServerResult } from '../models/server-result';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeopleWithSearch(search: string, skip: number, take: number): Observable<ServerResult<Person>> {
    return this.http.get<ServerResult<Person>>(`/api/People`, {
      params: {
        filter: search,
        skip: skip.toString(),
        take: take.toString()
      }
    });
  }

  getPersonDetail(id: number): Observable<Person> {
    return this.http.get<Person>(`/api/People/${id}`);
  }
}
