import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fadeInPrimary } from '../../styles/animations.styled';

export const AboutContainer = styled.div`
  padding: ${({ theme }) => theme.paddings.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  color: ${({ theme }) => theme.colors.primary};

  animation: ${fadeInPrimary} 1s ease-in-out;

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.paddings.large};
  }
`;

export const AboutTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.margins.medium};

  font-size: ${({ theme }) => theme.fontSizes.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  color: hsl(0, 0%, 170%);

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.margins.large};

    font-size: 32px;
  }
`;

export const AboutDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.large};
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes.primary};
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  color: hsl(0, 0%, 170%);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const AboutLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;

  transition: color 0.3s ease-in-out;

  &:hover {
    color: hsl(0, 0%, 17%);
  }
`;

export const StyledButton = styled(Link)`
  padding: ${({ theme }) =>
    `${theme.paddings.small} ${theme.paddings.medium}`};

  font-size: ${({ theme }) => theme.fontSizes.primary};
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: hsl(0, 0%, 17%);
  }
`;

export const AnimatedButton = styled(StyledButton)`
  margin-bottom: 25px;

  animation: ${fadeInPrimary} 1s ease-in-out;
`;
