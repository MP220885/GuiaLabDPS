'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export default function Page() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [logeado, setLogeado] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Credenciales de ejemplo
    if (usuario === 'admin' && contrasena === '1234') {
      setMensaje(`¡Bienvenido, ${usuario}!`);
      setLogeado(true);
    } else {
      setMensaje('Credenciales incorrectas. Inténtalo de nuevo.');
      setLogeado(false);
    }
  };

  return (
    <div className={styles.contenedor}>
      <h2>Iniciar Sesión</h2>
      {!logeado ? (
        <form onSubmit={handleLogin} className={styles.formulario}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.boton}>
            Iniciar Sesión
          </button>
        </form>
      ) : (
        <p className={styles.bienvenida}>{mensaje}</p>
      )}
      {!logeado && mensaje && <p className={styles.error}>{mensaje}</p>}
    </div>
  );
}
