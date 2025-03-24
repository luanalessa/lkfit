import React, { useState } from 'react';
import Title from '../../components/title';
import * as S from "./styles";
import Button from '../../components/button';

interface FormData {
  name: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNumber = '5588993758569'; 
    const text = `Olá! Me chamo ${formData.name}. ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <S.Content id="ContactTag">
      <S.TitleContainer>
        <Title 
          uptitle="~ Fale Comigo ~" 
          title="Entre em Contato"
          legend="Tire suas dúvidas ou agende sua avaliação gratuita!"
        />
      </S.TitleContainer>

      <S.FormContainer>
        <S.Form onSubmit={handleSubmit}>
          <S.Input 
            type="text" 
            placeholder="Seu Nome" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <S.Textarea 
            placeholder="Escreva sua mensagem..." 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">
            Enviar para o WhatsApp
          </Button>
        </S.Form>
      </S.FormContainer>
    </S.Content>
  );
};

export default Contact;

