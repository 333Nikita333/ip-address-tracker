import { keyframes } from 'styled-components';

export const fadeInPrimary = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInSecondary = keyframes`
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

export const slideIn = keyframes`
from {
opacity: 0;
transform: translateY(-10px);
}
to {
opacity: 1;
transform: translateY(0);
}
`;

export const bounceAnimation = keyframes`
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
