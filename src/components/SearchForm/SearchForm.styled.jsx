import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  margin-bottom: ${({ theme }) => theme.margins.medium};
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 450px;
  }
`;

export const Input = styled.input`
  padding: 15px;
  padding-right: 55px;
  width: 100%;
  margin-bottom: 8px;

  font-size: ${({ theme }) => theme.fontSizes.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.primary};
  color: #2b2b2b;
  border-radius: 15px;
  border: none;

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.paddings.small};

    font-size: ${({ theme }) => theme.fontSizes.primary};
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000000;
  cursor: pointer;
  border: none;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  &:hover {
    background-color: #2b2b2b;
  }

  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.primary};
  color: red;
`;
