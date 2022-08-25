import React from 'react';
import "./style.css"
import Movies from './components/Movies';

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>App Component</h1>
        <Movies />
      </div>
    </div>
  );
}
