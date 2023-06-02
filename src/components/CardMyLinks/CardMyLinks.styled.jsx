import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  40% {
    transform: scale(1.3);
  }
  60% {
    transform: scale(0.8);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  height: 50px;
  width: 200px;
  border-radius: 25px;
  
  &::before,
  &::after {
    position: absolute;
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    transition: 0.25s linear;
    z-index: 1;
  }

  &::before {
    content: '';
    left: 0;
    justify-content: flex-end;
    background-color: rgba(62, 32, 180);
  }

  &::after {
    content: '';
    right: 0;
    justify-content: flex-start;
    background-color: rgba(62, 32, 180);
  }

  &:hover {
    box-shadow: none;
  }

  &:hover span {
    opacity: 0;
    z-index: -3;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: whitesmoke;
  font-size: 18px;
  font-weight: 700;
  opacity: 1;
  transition: opacity 0.25s;
  z-index: 2;
`;

export const SocialLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: whitesmoke;
  font-size: 24px;
  text-decoration: none;
  transition: 0.25s;
  border-radius: 50%;

  svg {
    text-shadow: 1px 1px rgba(31, 74, 121, 0.7);
    transform: scale(1);
  }

  &:hover {
    background-color: #fff;
    animation: ${bounceAnimation} 0.4s linear;
  }
`;
