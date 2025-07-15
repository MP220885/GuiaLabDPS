import React from 'react';
import styles from "../app/page.module.css";

const Todo = ({ item, index, deleteItem }) => {
  return (
    <div className={styles.list}>
      <h3>{item.nombre} ({item.marca})</h3>
      <p>Cantidad: {item.cantidad}</p>
      <p>Precio: ${parseFloat(item.precio).toFixed(2)}</p>
      <p>Subtotal: ${(parseFloat(item.precio) * parseInt(item.cantidad)).toFixed(2)}</p>
      <button className={styles.btn_delete} onClick={() => deleteItem(index)}>Eliminar</button>
    </div>
  );
};

export default Todo;
