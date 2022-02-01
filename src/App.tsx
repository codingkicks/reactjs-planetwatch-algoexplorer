import React from 'react';
import './App.scss';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// https://mui.com/getting-started/installation/

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
