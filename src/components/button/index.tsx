import React from 'react';
import * as S from './styles';

interface ButtonProps {
  variant?: 'solid' | 'outline';
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  onClick,
  children,
  type = 'button',
}) => {
  return (
    <S.StyledButton variant={variant} onClick={onClick} type={type}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
