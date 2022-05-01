import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { FarmModel } from '../../../models/farm.model';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  constructor(private http: HttpClient) { }

  getFarms() {
    return this.http.get<FarmModel[]>(`${environment.api}/api/farm`);
  }
}
