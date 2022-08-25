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

  addAuteile(autoteile: AutoTeile): Observable<AutoTeile> {
    return this.http.post<AutoTeile>(this.backendUrl, autoteile);
  }

  deleteAutoteile(autoteileId: string): Observable<any> {
    return this.http.delete(`${this.backendUrl}/${autoteileId}`);
  }

  updatePiece(
    autoteileId: string,
    autoteile: AutoTeile
  ): Observable<AutoTeile> {
    return this.http.patch<AutoTeile>(
      `${this.backendUrl}/${autoteileId}`,
      autoteile
    );
  }
}
