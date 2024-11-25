import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/Autenticar';
import styles from './Usuarios.module.css';

const Usuarios = () => {
  const { auth } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (auth.token) {
      axios
        .get('https://reqres.in/api/users')
        .then((response) => {
          setUsers(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching users', error);
        });
    }
  }, [auth.token]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Usuarios</h2>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            <img src={user.avatar} alt={`${user.first_name}'s avatar`} className={styles.avatar} />
            <div className={styles.userInfo}>
              <p className={styles.name}>
                {user.first_name} {user.last_name}
              </p>
              <p className={styles.email}>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
