import styled from 'styled-components';

const exercise = require("../../assets/exercise.png");

export const Content = styled.div`
  height: 600px;
  padding: 0 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  color: white;
  background-image: url(${exercise});
  background-size: cover;
  background-position: center;
`;

export const TitleContainer = styled.div`
  flex: 1; 
  padding-right: 20px; 
`;

export const FormContainer = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center; /* Alinha o formulário ao centro */
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 30px;
  border-radius: 15px;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 15px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  padding: 15px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  min-height: 120px;
`;

export const Button = styled.button`
  padding: 15px;
  background-color: #25D366;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #1ebe57;
  }
`;
