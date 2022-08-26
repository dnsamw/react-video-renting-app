import React from 'react';
import './style.css';

import NavBar from './components/NavBar';
import Movies from './components/Movies';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Movies />
      </div>
    </>
  );
}
