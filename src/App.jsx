// import { useState } from 'react'

import './App.css';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';

function App() {
  return (
    <>
      <main>
        <Sidebar />
        <Home />
      </main>
    </>
  );
}

export default App;
