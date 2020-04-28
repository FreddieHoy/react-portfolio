import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const fadeInAndOut = keyframes`
  0% { 
    opacity: 0; 
  }
  30% { 
    opacity: 1;
  }
  70% { 
    opacity: 1;
  }
  100% { 
    opacity: 0;
  }
`;

export const fadeInTop = keyframes`
  0% { 
    opacity: 0; 
    transform: translate(0px, -10px);
  }
  100% { 
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const fadeInRight = keyframes`
  0% { 
    opacity: 0; 
    transform: translate(10px, 0px);
  }
  100% { 
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

export const fadeInLeft = keyframes`
  0% { 
    opacity: 0; 
    transform: translate(-10px, 0px);
  }
  100% { 
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;
