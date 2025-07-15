"use client"
import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import styles from "../app/page.module.css";

const Form = () => {
  const [item, setItem] = useState({
    nombre: '',
    marca: '',
    cantidad: '',
    precio: '',
  });

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Recalcula el total cada vez que cambie la lista de productos
    const newTotal = items.reduce((sum, i) => sum + (parseFloat(i.precio) * parseInt(i.cantidad)), 0);
    setTotal(newTotal);
  }, [items]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (
      !item.nombre.trim() ||
      !item.marca.trim() ||
      !item.cantidad ||
      !item.precio
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    setItems([...items, item]);
    setItem({ nombre: '', marca: '', cantidad: '', precio: '' }); 
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Agregar Producto</label><br />
        <input className={styles.form_input} type="text" name="nombre" placeholder="Nombre" value={item.nombre} onChange={handleChange} />
        <input className={styles.form_input} type="text" name="marca" placeholder="Marca" value={item.marca} onChange={handleChange} />
        <input className={styles.form_input} type="number" name="cantidad" placeholder="Cantidad" value={item.cantidad} onChange={handleChange} />
        <input className={styles.form_input} type="number" step="0.01" name="precio" placeholder="Precio" value={item.precio} onChange={handleChange} />
        <button className={styles.form_button} onClick={handleClick}>Agregar</button>
      </form>

      {items.map((value, index) => (
        <Todo key={index} index={index} item={value} deleteItem={deleteItem} />
      ))}

      <h3>Total de la compra: ${total.toFixed(2)}</h3>
    </>
  );
};

export default Form;
