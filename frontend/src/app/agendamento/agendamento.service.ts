import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from './agendamento.model';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private apiUrl = '/agendamentos'; // Usará o proxy

  constructor(private http: HttpClient) { }

  getAgendamentos(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiUrl);
  }

  createAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiUrl, agendamento);
  }
}

