import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState('light');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={themeMode}>
      <div style={{ background: themeMode.background, color: themeMode.color, minHeight: "100vh" }}>
        <Navbar />
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <Hero />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;