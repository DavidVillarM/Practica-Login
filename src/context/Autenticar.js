
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();
// usar email:eve.holt@reqres.in pass:cityslicka
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ email: '', password: '', token: '' });
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });
      const token = response.data.token;
      setAuth({ email, password, token });
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setError(null);
    } catch (err) {
      setError('Contraseña o email equivocado. Intentelo de nuevo');
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, error }}>
      {children}
    </AuthContext.Provider>
  );
};
