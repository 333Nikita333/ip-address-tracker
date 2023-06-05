import styled from 'styled-components';
import { bounceAnimation } from '../../styles/animations.styled';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 200px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &::before,
  &::after {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;

    transition: 0.25s linear;
  }

  &::before {
    content: '';
    left: 0;
    justify-content: flex-end;

    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &::after {
    content: '';
    right: 0;
    justify-content: flex-start;

    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    box-shadow: none;
  }

  &:hover span {
    z-index: -3;
    opacity: 0;
  }

  &:hover::before {
    opacity: 0.5;
    transform: translateY(-100%);
  }

  &:hover::after {
    opacity: 0.5;
    transform: translateY(100%);
  }
`;

export const Text = styled.span`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  font-size: ${({ theme }) => theme.fontSizes.primary};
  font-weight: ${({ theme }) => theme.fontWeights.secondary};
  color: whitesmoke;
  opacity: 1;
  transition: opacity 0.25s;
`;

export const SocialLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  font-size: ${({ theme }) => theme.fontSizes.secondary};
  color: whitesmoke;
  text-decoration: none;
  border-radius: 50%;
  transition: 0.25s;

  svg {
    text-shadow: 1px 1px rgba(31, 74, 121, 0.7);

    transform: scale(1);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};

    animation: ${bounceAnimation} 0.4s linear;
  }
`;
