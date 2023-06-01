import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(10px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const HomeContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  animation: ${fadeIn} 1s ease;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const WelcomeMessage = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 1s ease;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const Feature = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1s ease;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;
