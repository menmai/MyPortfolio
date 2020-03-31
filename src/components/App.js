import React from 'react';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Navigation from './Navigation';

function App() {
  return (
    <div>
        <Navigation />
        <Header />
        <About />
        <Portfolio />
    </div>
  );
}

export default App;
