import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ChunkModel, FarmModel } from '../../../models/farm.model';

@Injectable({
  providedIn: 'root'
})
export class ChunkService {

  constructor(private http: HttpClient) { }

  getChunks() {
    return this.http.get(`${environment.api}/api/chunk`);
  }

  createChunk(chunk: ChunkModel) {
    return this.http.post<{message: string}>(`${environment.api}/api/chunk`, chunk);
  }
}
