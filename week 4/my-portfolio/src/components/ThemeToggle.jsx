import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color};
  position: fixed;
  top: 1rem;
  right: 1rem;
  transition: all 0.3s ease;
`;

const ThemeToggle = ({ toggleTheme, theme }) => (
  <ToggleButton onClick={toggleTheme}>
    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
  </ToggleButton>
);

export default ThemeToggle;