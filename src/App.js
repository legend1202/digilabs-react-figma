import React from 'react';
import Theme from './Theme';
import GlobalStyle from './GlobalStyle';
import Button from './components/Button';
import StepperModal from './components/StepperModal';
// import './App.css';


function App() {
  return (
    <Theme>
      <GlobalStyle />
      {/* Your app components go here */}
      <StepperModal />
    </Theme>
  );
}

export default App;
