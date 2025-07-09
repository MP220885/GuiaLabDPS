'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export default function Page() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div className={styles.contenedor}>
      <h1>Contador: {contador}</h1>
      <div className={styles.botones}>
        <button onClick={incrementar} className={styles.boton}>Incrementar</button>
        <button onClick={decrementar} className={styles.boton}>Decrementar</button>
      </div>
    </div>
  );
}
