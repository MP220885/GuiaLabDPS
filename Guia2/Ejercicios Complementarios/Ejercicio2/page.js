"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const validarNumeros = () => {
    if (numero1 === '' || numero2 === '') {
      setResultado("Por favor, ingresa ambos números.");
      return false;
    }
    return true;
  };

  const sumar = () => {
    if (!validarNumeros()) return;
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };

  const restar = () => {
    if (!validarNumeros()) return;
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };

  const multiplicar = () => {
    if (!validarNumeros()) return;
    const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
  };

  const dividir = () => {
    if (!validarNumeros()) return;
    const divisor = parseFloat(numero2);
    if (divisor === 0) {
      setResultado("Error: No se puede dividir entre cero.");
      return;
    }
    const resultadoDivision = parseFloat(numero1) / divisor;
    setResultado(`Resultado de la división: ${resultadoDivision}`);
  };

  const potenciar = () => {
    if (!validarNumeros()) return;
    const resultadoPotencia = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potenciación: ${resultadoPotencia}`);
  };

  const raizCuadrada1 = () => {
    if (numero1 === '') {
      setResultado("Por favor, ingresa el número 1.");
      return;
    }
    const n = parseFloat(numero1);
    if (n < 0) {
      setResultado("Error: No se puede obtener raíz cuadrada de un número negativo.");
      return;
    }
    const resultadoRaiz = Math.sqrt(n);
    setResultado(`Raíz cuadrada de número 1: ${resultadoRaiz}`);
  };

  const raizCuadrada2 = () => {
    if (numero2 === '') {
      setResultado("Por favor, ingresa el número 2.");
      return;
    }
    const n = parseFloat(numero2);
    if (n < 0) {
      setResultado("Error: No se puede obtener raíz cuadrada de un número negativo.");
      return;
    }
    const resultadoRaiz = Math.sqrt(n);
    setResultado(`Raíz cuadrada de número 2: ${resultadoRaiz}`);
  };

  const reiniciar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        </div>
        <div className={styles.botones}>
          <button className={styles.button} onClick={sumar}>Sumar</button>
          <button className={styles.button} onClick={restar}>Restar</button>
          <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
          <button className={styles.button} onClick={dividir}>Dividir</button>
          <button className={styles.button} onClick={potenciar}>Potenciar</button>
          <button className={styles.button} onClick={raizCuadrada1}>Raíz √ N1</button>
          <button className={styles.button} onClick={raizCuadrada2}>Raíz √ N2</button>
          <button className={styles.button} onClick={reiniciar}>Borrar</button>
        </div>
        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}
