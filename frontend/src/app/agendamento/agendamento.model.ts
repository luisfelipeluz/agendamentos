export interface Agendamento {
  id?: number;
  servico: string;
  profissional: string;
  cliente: string;
  telefoneCliente: string;
  dataHoraAgendamento: string;
  dataMarcacao?: string;
}
