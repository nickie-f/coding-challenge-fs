import React  from 'react';
import './App.css';
import AppRoutes from './routes';
import SwitchButton from "./shared/SwitchButton";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <SwitchButton />
    </div>
  );
}

export default App;
