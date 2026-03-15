import { Routes } from '@angular/router';
import { AgendamentoListComponent } from './agendamento/agendamento-list/agendamento-list';
import { AgendamentoFormComponent } from './agendamento/agendamento-form/agendamento-form';

export const routes: Routes = [
  { path: 'agendamentos', component: AgendamentoListComponent },
  { path: 'agendamentos/novo', component: AgendamentoFormComponent },
  { path: '', redirectTo: '/agendamentos', pathMatch: 'full' }
];

