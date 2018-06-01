import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PersonDetails } from '../models/person-details';
import { HttpClient, HttpParams } from '@angular/common/http'
import { PaginatedResponse } from '../models/paginated-response';
import { Person } from '../models/person';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private currentPeople: Person[] = [];
  private totalResults: number;

  constructor(private http: HttpClient) { }

  getWithSearch(searchTerms: string, refresh: boolean = false): Observable<Person[]> {
    if (!refresh && this.currentPeople.length === this.totalResults) {
      return of(this.currentPeople);
    }

    let params = new HttpParams();

    if (searchTerms) {
      params = params.set('filter', searchTerms);
    }

    if (!refresh) {
      params = params.set('skip', `${this.currentPeople.length}`);
    }

    const options = {
      params: params
    }

    return this.http.get<PaginatedResponse<Person>>('/api/people', options).pipe(
      map(response => {
        this.totalResults = response.totalResultsCount;
        if (refresh) {
          this.currentPeople = response.results;
        }
        else {
          this.currentPeople = this.currentPeople.concat(response.results);
        }

        return this.currentPeople;
      })
    );
  }

  getByID(id: number) : Observable<PersonDetails> {
    return this.http.get<PersonDetails>(`/api/people/${id}`);
  }
}
