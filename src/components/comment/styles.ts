import styled from 'styled-components';

export const CommentContainer = styled.div`
  border-radius: 20px;
  padding: 20px;
  width: 400px;
  height: 210px;
  margin: 10px 0;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: white;
`;

export const Comment = styled.div`
  font-size: 1rem;
  color: white;
  line-height: 1.5;
  word-wrap: break-word;
`;
