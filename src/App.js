import React, { useState } from 'react';
import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";
import './App.css';

function App() {
  const [atBatInfo, setAtBatInfo] = useState({ balls: 0, strikes: 0});

  return (
    <div>
      <Display atBatInfo={atBatInfo} />
      <Dashboard atBatInfo={atBatInfo} setAtBatInfo={setAtBatInfo} />
    </div>
  );
}

export default App;
