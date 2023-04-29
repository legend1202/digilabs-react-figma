import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';


const lightTheme = {
  background: '#FAFBFC;',
  text: '#5F6D7E',
  ctsectionBgcolor: '#FAFBFC',
  borderColor: '#DAE0E6',
  mainFormBgC: '#FFFFFF',
  ctBtnBgc: '#FAFBFC',
  stepNumberBgC: 'none',
  stepNumberC: '#5F6D7E'
};

const darkTheme = {
    background: '#151B28',
    text: '#F9F9F9',
    ctsectionBgcolor: '#2E3545',
    borderColor: 'transparent',
    mainFormBgC: '#1C2534',
    ctBtnBgc: '#252D3C',
    stepNumberBgC: '#437EF7',
    stepNumberC: '#5F6D7E'

};

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme} >
      <button onClick={toggleTheme}>Toggle Theme</button>
      {children}
    </ThemeProvider>
  );
};

export default Theme;