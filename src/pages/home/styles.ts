import styled from 'styled-components';

// Definindo a imagem como variável global ou importando no topo do arquivo
const bannerImage = require('../../assets/banner.png');

export const PageContainer = styled.div`
  width: 100vw; 
  height: 80vh;
  background-image: url(${bannerImage}); 
  background-position: 50% 50%;
  top: 0;
  left: 0;
  background-size: cover; 
  background-position: center; 
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  margin: 0 auto;
  overflow: hidden; 
`;

export const ContentWrapper = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  z-index: 1;
  padding: 0 20px;
`;

export const ActionButtonWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: flex-start;
  color: white;
  margin-top: 50px;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;

  span {
    font-size: 60px;
    color: rgb(72, 199, 39); 
  }
`;

export const DescriptionText = styled.span`
  font-size: 17px;
  opacity: 0.7;
  margin-bottom: 10px;

  span {
    color: rgb(72, 199, 39); 
    margin-right: 5px;
    font-size: inherit;
  }
`;

export const BannerImageWrapper = styled.div`
  width: 20%;
  height: 100%;
  background: none;
`;
