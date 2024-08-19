// import { useState } from 'react'

import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <div className="flex gap-5 justify-center max-w-[1200px] mx-auto">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
