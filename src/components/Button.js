import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;

export default Button;