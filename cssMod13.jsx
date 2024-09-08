import React from 'react';
import styled from 'styled-components';

// Define the styled Button component
const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004080;
    transform: scale(0.98);
  }
`;

const ButtonComponent = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
