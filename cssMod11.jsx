import React from 'react';
import styled from 'styled-components';

// Define the styled Card component
const CardWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  margin: 16px auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Card = ({ title, content }) => {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </CardWrapper>
  );
};

export default Card;
