import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { slideIn } from '../../styles/animations.styled';

export const NavList = styled.ul`
  display: flex;
  gap: 50px;
  align-items: center;

  animation: ${slideIn} 0.5s ease;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }

  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  & li {
    position: relative;

    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeights.secondary};

    @media screen and (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSizes.primary};
      font-weight: ${({ theme }) => theme.fontWeights.primary};
    }

    & a {
      position: relative;

      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;

      transition: color 0.2s ease;

      &:before {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;

        background-color: ${({ theme }) => theme.colors.primary};

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

  &:hover {
    transform: scale(1.1);
  }
`;
