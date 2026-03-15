import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agendamento } from '../agendamento.model';
import { AgendamentoService } from '../agendamento.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agendamento-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './agendamento-list.html',
  styleUrls: ['./agendamento-list.css']
})
export class AgendamentoListComponent implements OnInit {

  agendamentos: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {
    this.agendamentoService.getAgendamentos().subscribe(data => {
      this.agendamentos = data;
    });
  }
}

