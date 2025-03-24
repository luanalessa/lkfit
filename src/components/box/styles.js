import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 200px;
  margin: 15px;
  background-color: #2525258a;
  padding: 20px;
  border-radius: 20px;
`;

export const Icon = styled.div`
  font-size: 40px;
  color:rgb(72, 199, 39); 
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 12px;
  text-align: center;

  margin-top: 5px;
  color: #aaa;
`;
