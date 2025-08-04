import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1.5rem 0;
  background: ${({ theme }) => theme.gradient};
  color: ${({ theme }) => theme.color};
  margin-top: 2rem;
`;

const Footer = () => (
  <FooterContainer>
    <p>© 2025 Gaurav Nagrale. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;