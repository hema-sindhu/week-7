import React, { useState } from 'react';
import styled from 'styled-components';

// Define the styled components
const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 34px;
  background-color: ${props => (props.isOn ? '#4caf50' : '#ccc')};
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const Slider = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
  transform: ${props => (props.isOn ? 'translateX(26px)' : 'translateX(0)')};
`;

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <Switch isOn={isOn} onClick={handleToggle}>
      <Slider isOn={isOn} />
    </Switch>
  );
};

export default ToggleSwitch;
