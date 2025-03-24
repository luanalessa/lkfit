import React from 'react';
import { ReactNode } from 'react';
import * as S from './styles';

interface TitleProps {
  uptitle: ReactNode;
  title: ReactNode;
  legend: ReactNode;
}

const Title: React.FC<TitleProps> = ({ uptitle, title, legend }) => {
  return (
    <S.Head>
      <S.Uptitle>{uptitle}</S.Uptitle>
      <S.Title>{title}</S.Title>
      <S.Legend>{legend}</S.Legend>
    </S.Head>
  );
};

export default Title;
