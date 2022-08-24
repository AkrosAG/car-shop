import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutoTeile } from '../model/auto-teile';

@Injectable({
  providedIn: 'root',
})
export class AutoTeileService {
  backendUrl = 'http://localhost:3000/pieces';

  constructor(private http: HttpClient) {}

  getAllAutoTeilen(): Observable<AutoTeile[]> {
    return this.http.get<AutoTeile[]>(this.backendUrl);
  }

  getAutoTeile(autoteileId: string): Observable<AutoTeile> {
    return this.http.get<AutoTeile>(`${this.backendUrl}/${autoteileId}`);
  }
}
