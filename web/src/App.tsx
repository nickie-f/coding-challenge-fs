import React  from 'react';
import './App.css';
import AppRoutes from './routes';
import SwitchButton from "./shared/SwitchButton";

function App() {
  return (
    <div>
      <AppRoutes />
      <SwitchButton />
    </div>
  );
}

export default App;