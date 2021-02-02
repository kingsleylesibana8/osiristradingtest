import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResults } from './user-dto';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  getUser() : Observable<UserResults> {
    return this.http.get<UserResults>(`https://randomuser.me/api/`).pipe(
      retry(20)
    );
  }
}
