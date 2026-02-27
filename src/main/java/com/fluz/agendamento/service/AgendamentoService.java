package com.fluz.agendamento.service;


import com.fluz.agendamento.infrastructure.entity.Agendamento;
import com.fluz.agendamento.infrastructure.repository.AgendamentoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@Service
@RequiredArgsConstructor // injeção de dependências
public class AgendamentoService {

    private final AgendamentoRepository agendamentoRepository;

    public Agendamento salvarAgendamento(Agendamento agendamento){

        LocalDateTime horaAgendamento = agendamento.getDataHoraAgendamento();
        LocalDateTime horaFim = agendamento.getDataHoraAgendamento().plusHours(1);

        Agendamento agendados = agendamentoRepository.findByServicoAndDataHoraAgendamentoBetween(agendamento.getServico(),
            horaAgendamento, horaFim);


        if(Objects.nonNull(agendados)){
            throw new RuntimeException("Horário já está preenchido");
        }
        return agendamentoRepository.save(agendamento);

    }

    public void deletarAgendamento(LocalDateTime dataHoraAgendamento, String cliente){
        agendamentoRepository.deleteByDataHoraAgendamentoAndCliente(dataHoraAgendamento, cliente);
    }

    public Agendamento buscarAgendamentoDia(LocalDate data) {
        LocalDateTime primeiraHoraDia = data.atStartOfDay();
        LocalDateTime horaFinal = data.atTime(23, 59, 59);

        return agendamentoRepository.findByDataHoraAgendamentoBetween(primeiraHoraDia, horaFinal);
    }

    public Agendamento alterarAgendamento(Agendamento agendamento, String cliente, LocalDateTime dataHoraAgendamento){
        Agendamento agenda = agendamentoRepository.findByDataHoraAgendamentoAndCliente(dataHoraAgendamento, cliente);

        if (Objects.isNull(agenda)){
            throw new RuntimeException("Horário já está preenchido");
        }
        agendamento.setId(agenda.getId());
        return agendamentoRepository.save(agendamento);

    }

    }


