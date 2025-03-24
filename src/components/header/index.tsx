import React from 'react';
import * as S from './styles';

const logo = require('../../assets/peso.png');

export default function Header() {
  return (
    <S.Container id="HeaderTag">
      <S.Head>
        <S.Logo>
          <img src={logo} alt="Logo" />
        </S.Logo>

        <S.Menu>
          <a href="#HomeTag"><S.Item>Home</S.Item></a>
          <a href="#AboutTag"><S.Item>Sobre</S.Item></a>
          <a href="#Services"><S.Item>Serviços</S.Item></a>
          <a href="#Depoimentos"><S.Item>Depoimentos</S.Item></a>
          <a href="#ContactTag"><S.Item>Contato</S.Item></a>
        </S.Menu>
      </S.Head>
      <S.SubMenu>
        Entre na lista de espera. Vagas limitadas!
      </S.SubMenu>
    </S.Container>
  );
}
