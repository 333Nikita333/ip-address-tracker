import styled from 'styled-components';
import { fadeInPrimary, slideIn } from '../../styles/animations.styled';

export const Header = styled.header`
  position: sticky;
  z-index: 10000;
  top: -1px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.primary};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;

  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeInPrimary} 0.5s ease;

  @media screen and (min-width: 768px) {
    padding: 15px;
    justify-content: space-between;
  }
  & a {
    text-decoration: none;
    color: inherit;

    transition: border-radius 0.2s ease, background 0.2s ease, color 0.2s ease,
      box-shadow 0.2s ease;
  }

  & a.active {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.primary}`};
    box-shadow: 0px 5px 10px rgba(0, 1, 0, 0.1);
  }

  & nav {
    animation: ${slideIn} 0.5s ease;
  }
`;
