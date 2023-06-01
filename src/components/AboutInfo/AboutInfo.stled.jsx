import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  animation: ${fadeIn} 1s ease-in-out;
  min-height: 100vh;
  
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: hsl(0, 0%, 170%);

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  color: hsl(0, 0%, 170%);
  font-weight: 400;
  margin-bottom: 30px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const AboutLink = styled.a`
  color: rgba(62, 32, 180);
  text-decoration: underline;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: hsl(0, 0%, 17%);
  }
`;

export const StyledButton = styled(Link)`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
  background-color: rgba(62, 32, 180);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: hsl(0, 0%, 17%);
  }
`;

export const AnimatedButton = styled(StyledButton)`
  animation: ${fadeIn} 1s ease-in-out;
`;
