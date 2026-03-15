import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendamentoService } from '../agendamento.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendamento-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agendamento-form.html',
  styleUrls: ['./agendamento-form.css']
})
export class AgendamentoFormComponent implements OnInit {

  agendamentoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private agendamentoService: AgendamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.agendamentoForm = this.fb.group({
      servico: ['', Validators.required],
      profissional: ['', Validators.required],
      cliente: ['', Validators.required],
      telefoneCliente: ['', Validators.required],
      dataHoraAgendamento: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.agendamentoForm.valid) {
      this.agendamentoService.createAgendamento(this.agendamentoForm.value).subscribe(() => {
        this.router.navigate(['/agendamentos']);
      });
    }
  }
}

