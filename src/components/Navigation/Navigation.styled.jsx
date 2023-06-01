import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 50px;
  align-items: center;

  animation: ${slideIn} 0.5s ease;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }

  @media screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }

  & li {
    font-size: 20px;
    font-weight: 500;
    position: relative;
    
    @media screen and (min-width: 768px) {
      font-size: 18px;
      font-weight: 400;
    }
    
    & a {
    position: relative;
    color: #fff;
    text-decoration: none;
    transition: color 0.2s ease;

    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transform: scaleX(0);
      transition: transform 0.2s ease;
    }

    &:hover {
      color: #f1f1f1;

      &:before {
        transform: scaleX(1);
      }
    }
  }
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: 500;

  @media screen and (min-width: 400px) {
    font-weight: 700;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
