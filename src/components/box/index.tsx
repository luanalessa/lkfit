import React, { JSX } from 'react';
import * as S from './styles';

interface BoxProps {
  href: string;
  title: string;
  description: string;
  icon: JSX.Element; 
}

const Box: React.FC<BoxProps> = ({ href, title, description, icon }) => {
  return (
    <S.Container href={href} rel="noreferrer" target="_blank" key={title}>
      <S.Icon>{icon}</S.Icon>  {/* Exibindo o ícone */}
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};

export default Box;
