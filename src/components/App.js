import React from 'react';
import Main from './Main';
import About from './About';
import Portfolio from './Portfolio';
import Navigation from './Navigation';

function App() {
  return (
    <div>
        <Navigation />
        <Main />
        <About />
        <Portfolio />
    </div>
  );
}

export default App;
