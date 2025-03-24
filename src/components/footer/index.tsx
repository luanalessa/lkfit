import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.FooterContent>
        <S.SocialLinks>
          <S.SocialLink 
            href="https://www.instagram.com/seuusuario" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </S.SocialLink>

          <S.SocialLink 
            href="mailto:seuemail@email.com"
          >
            <FaEnvelope />
          </S.SocialLink>

          <S.SocialLink 
            href="https://wa.me/5588999999999" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </S.SocialLink>
        </S.SocialLinks>

        <S.DesignInfo>
          <p>Design by <a href="https://www.linkedin.com/in/luanalessa/" target="_blank" rel="noopener noreferrer">Luana Lessa</a></p>
        </S.DesignInfo>

        <S.LicenseInfo>
          <p>© {new Date().getFullYear()} Todos os direitos reservados </p>
        </S.LicenseInfo> 
      </S.FooterContent>
    </S.Footer>
  );
};

export default Footer;
