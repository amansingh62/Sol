'use client';

import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button> Launch App
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    width: 9em;
    height: 3em;
    border-radius: 30em;
    font-size: 15px;
    font-family: inherit;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
    z-index: 1;
    background: transparent;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 20px rgba(182, 113, 255, 0.1);
  }

  button:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 30px rgba(182, 113, 255, 0.2);
  }

  button::before {
    content: '';
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #B671FF 0%, #C577EE 50%, #E282CA 100%);
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
    z-index: -1;
  }

  button:hover::before {
    width: 9em;
  }

  button::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transform: rotate(45deg);
    transition: all 0.5s ease;
    opacity: 0;
  }

  button:hover::after {
    animation: shine 1.5s ease-in-out infinite;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      transform: translateX(100%) rotate(45deg);
      opacity: 0;
    }
  }
`;

export default Button;
