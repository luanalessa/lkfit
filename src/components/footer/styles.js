import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #151515;
  color: white;
  padding: 15px 0;
  font-size: 14px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialLink = styled.a`
  color: white;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #25D366; 
  }
`;

export const DesignInfo = styled.div`
  text-align: center;
  flex-grow: 1;
  position: absolute;
  cursor: pointer;

  right: 45%;
  a {
    color: #1ebe57; 
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LicenseInfo = styled.div`
  text-align: right;

  a {
    color: #1ebe57; 
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
