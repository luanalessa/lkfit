// CommentBox.tsx

import React from 'react';
import * as S from './styles';

interface CommentProps {
  name: string;
  comment: string;
}

const Comment: React.FC<CommentProps> = ({ name, comment }) => {
  return (
    <S.CommentContainer>
      <S.Name>{name}</S.Name>
      <S.Comment>{comment}</S.Comment>
    </S.CommentContainer>
  );
};

export default Comment;
