import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 30px;
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 300ms ease;

  &:hover {
    background-color: ${({ name }) => handleChangeColor(name)};
  }
`;

function handleChangeColor(color) {
  switch (color) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'yellow';
    case 'bad':
      return 'red';
    default:
      return 'orange';
  }
}
