import React, { useState } from 'react';
import * as S from "./styles";
import Title from '../../components/title';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como posso entrar em contato?",
    answer: "Você pode entrar em contato através do nosso formulário de contato ou nos enviando uma mensagem pelo WhatsApp."
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer: "Nosso horário de funcionamento é de segunda a sexta-feira, das 9h às 18h."
  },
  {
    question: "Como faço para agendar uma avaliação?",
    answer: "Você pode agendar uma avaliação gratuita através do nosso formulário de contato ou entrando em contato pelo WhatsApp."
  },
  {    
    question: "Posso treinar mesmo com lesões ou dores nas articulações?",
    answer: "Sim, é possível treinar com lesões ou dores nas articulações, mas é fundamental fazer um treino adaptado e individualizado. Durante nossa avaliação, levaremos em conta essas questões para montar um plano que respeite os seus limites."
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Aceito pagamento via cartão de crédito, transferência bancária e, em alguns casos, parcelamento. Entre em contato para saber mais sobre as opções de pagamento disponíveis."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <S.Content id="FAQTag">
      <Title 
        uptitle="~ Perguntas Frequentes ~" 
        title="Dúvidas Comuns"
        legend="Encontre respostas para as perguntas mais frequentes!"
      />
      <S.FAQList>
        {faqData.map((item, index) => (
          <S.FAQItem key={index}>
            <S.Question onClick={() => toggleAnswer(index)}>
              {item.question}
            </S.Question>
            <S.Answer active={activeIndex === index}>{item.answer}</S.Answer>
          </S.FAQItem>
        ))}
      </S.FAQList>
    </S.Content>
  );
};

export default FAQ;
