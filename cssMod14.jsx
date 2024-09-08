import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for Tabs
const TabContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #ccc;
`;

const TabButton = styled.button`
  background: ${(props) => (props.isActive ? '#007bff' : '#f1f1f1')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  border: none;
  border-bottom: ${(props) => (props.isActive ? '2px solid #007bff' : 'none')};
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.isActive ? '#0056b3' : '#ddd')};
  }
`;

const TabContent = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
`;

// Tab Component
const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <TabContainer>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            isActive={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </TabButton>
        ))}
      </TabContainer>
      <TabContent>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </TabContent>
    </>
  );
};

export default Tab;
