import React from 'react';

import Menu from './template/menu'
import Routes from './routes'

import './app.css';

function App() {
  return (
    <div className='container'>
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
