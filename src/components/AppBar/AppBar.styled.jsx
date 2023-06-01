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

export const Header = styled.header`
  position: sticky;
  z-index: 5;
  top: -1px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: rgba(32, 32, 180, 0.8);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease;
  
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
    border-bottom: 2px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 1, 0, 0.1);
  }

  & nav {
    animation: ${slideIn} 0.5s ease;
  }
`;
