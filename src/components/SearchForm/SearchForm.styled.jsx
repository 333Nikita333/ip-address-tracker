import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  margin-bottom: 20px;
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

  border-radius: 15px;
  border: none;
  font-size: 18px;
  font-weight: 400;
  color: #2b2b2b;

  @media screen and (min-width: 768px) {
    padding: 10px;
    font-size: 15px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: #000000;
  border: none;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  &:hover {
    background-color: #2b2b2b;
  }

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 17px;
  color: red;
`;
