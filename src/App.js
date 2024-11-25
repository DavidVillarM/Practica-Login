// src/App.js
import React from 'react';
import { AuthProvider } from './context/Autenticar';
import Loginform from './componentes/Login';
import Usuarios from './componentes/Usuarios';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Loginform />
        <Usuarios />
      </div>
    </AuthProvider>
  );
};

export default App;
