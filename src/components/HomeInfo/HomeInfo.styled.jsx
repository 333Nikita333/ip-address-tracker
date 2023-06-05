import styled from 'styled-components';
import { fadeInSecondary } from '../../styles/animations.styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.paddings.medium};
  min-height: 100vh;

  animation: ${fadeInSecondary} 1s ease;

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.paddings.large};
  }
`;

export const WelcomeMessage = styled.h1`
  margin-bottom: ${({ theme }) => theme.margins.medium};

  font-size: ${({ theme }) => theme.fontSizes.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  animation: ${fadeInSecondary} 1s ease;

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.margins.large};

    font-size: 32px;
  }
`;

export const Feature = styled.h2`
  margin-bottom: 10px;

  font-size: ${({ theme }) => theme.fontSizes.primary};
  font-weight: ${({ theme }) => theme.fontWeights.primary};
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  animation: ${fadeInSecondary} 1s ease;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;

    font-size: 20px;
  }
`;
