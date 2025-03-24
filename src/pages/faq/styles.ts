import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around ;
  background-color: rgb(0, 0, 0);
  color: #333;
`;



export const FAQList = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FAQItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid rgb(32, 31, 31);
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const Question = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  
  &:hover {
    color: #25D366;
  }
`;

export const Answer = styled.div<{ active: boolean }>`
  margin-top: 10px;
  font-size: 16px;
  color: #555;
  padding-left: 20px;
  background-color: #f9f9f9;
  border-left: 3px solid #25D366;
  
  position: relative;
  max-height: ${({ active }) => (active ? '500px' : '0')};
  transform: ${({ active }) => (active ? 'translateY(0)' : 'translateY(-20px)')};
  opacity: ${({ active }) => (active ? 1 : 0)};
  overflow: hidden;
  transition: all 0.2s ease-out;
  z-index: ${({ active }) => (active ? 1 : 0)}; /* Garantir que o dropdown fique acima de outros elementos */
`;

