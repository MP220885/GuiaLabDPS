import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
