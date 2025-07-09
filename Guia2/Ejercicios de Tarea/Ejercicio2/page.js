'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export default function Page() {
  const [temperatura, setTemperatura] = useState('');
  const [tipoConversion, setTipoConversion] = useState('CtoF');
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    const valor = parseFloat(temperatura);

    if (isNaN(valor)) {
      setResultado('Por favor ingresa un número válido.');
      return;
    }

    let resultadoFinal;
    if (tipoConversion === 'CtoF') {
      resultadoFinal = (valor * 9/5) + 32;
      setResultado(`${valor} °C = ${resultadoFinal.toFixed(2)} °F`);
    } else {
      resultadoFinal = (valor - 32) * 5/9;
      setResultado(`${valor} °F = ${resultadoFinal.toFixed(2)} °C`);
    }
  };

  return (
    <div className={styles.contenedor}>
      <h2>Conversor de Temperatura</h2>
      <input
        type="text"
        placeholder="Ingresa la temperatura"
        value={temperatura}
        onChange={(e) => setTemperatura(e.target.value)}
        className={styles.input}
      />
      <select
        value={tipoConversion}
        onChange={(e) => setTipoConversion(e.target.value)}
        className={styles.select}
      >
        <option value="CtoF">Celsius a Fahrenheit</option>
        <option value="FtoC">Fahrenheit a Celsius</option>
      </select>
      <button onClick={convertir} className={styles.boton}>Convertir</button>
      {resultado && <p className={styles.resultado}>{resultado}</p>}
    </div>
  );
}
