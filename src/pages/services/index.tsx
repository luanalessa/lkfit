import React from 'react';
import * as S from './styles';
import Title from '../../components/title';
import Box from '../../components/box';
import { FaDumbbell, FaLaptop, FaUser, FaChartLine } from 'react-icons/fa';

const servicos = {
  treinamentoPersonalizado: {
    titulo: "Treinos Personalizados",
    descricao: "Experimente um treinamento individualizado, adaptado aos seus objetivos e habilidades.",
    icone: <FaDumbbell /> // Ícone para Treinos Personalizados
  },
  coachingVirtual: {
    titulo: "Atendimento On-line",
    descricao: "Faça seus treinos de qualquer lugar, com acompanhamento completo e orientação em tempo real, tudo online.",
    icone: <FaLaptop /> // Ícone para Atendimento On-line
  },
  planosDeTreinamento: {
    titulo: "Acompanhamento Individual",
    descricao: "Receba um acompanhamento exclusivo, com avaliações periódicas.",
    icone: <FaUser /> // Ícone para Acompanhamento Individual
  },
  acompanhamentoDeProgresso: {
    titulo: "Acompanhamento de Progresso",
    descricao: "Monitore suas conquistas e seja avaliado periodicamente.",
    icone: <FaChartLine /> // Ícone para Acompanhamento de Progresso
  }
};

export default function Services() {
  return (
    <S.Content id="ServicesTag">
      <Title 
        uptitle="~ Nossos Serviços ~" 
        title="Transforme Sua Jornada de Bem-Estar" 
        legend="Descubra o Potencial de Planos Personalizados de Treinamento"
      />
      
      <S.Box>
        {Object.entries(servicos).map(([key, { titulo, descricao, icone }]) => (
          <Box
            key={key}
            href="#"
            title={titulo}
            description={descricao}
            icon={icone} 
          />
        ))}
      </S.Box>
    </S.Content>
  );
}
