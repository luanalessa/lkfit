import styled from 'styled-components';

interface StyledButtonProps {
  variant?: 'solid' | 'outline';
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 40px;
  width: 100%;
  background: ${({ variant }) => (variant === 'solid' ? 'rgb(72, 199, 39)' : 'none')};
  border: 2px solid rgb(72, 199, 39);
  border-radius: 6px;
  color: ${({ variant }) => (variant === 'solid' ? 'white' : 'rgb(72, 199, 39)')};
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ variant }) =>
      variant === 'outline' ? 'rgb(72, 199, 39)' : 'none'};
    color: ${({ variant }) => (variant === 'outline' ? 'white' : 'rgb(72, 199, 39)')};
  }
`;
