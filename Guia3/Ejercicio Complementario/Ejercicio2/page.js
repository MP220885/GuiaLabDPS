"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Card from "@/components/Card";
import Modal from "@/components/Modal";

export default function Home() {
  const [languages, setLanguages] = useState([]);
  const [selectedLang, setSelectedLang] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("/data/languages.json")
      .then(res => res.json())
      .then(data => setLanguages(data));
  }, []);

  const openModal = (language) => {
    setSelectedLang(language);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedLang(null);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Lenguajes de Programación</h1>
      <div className={styles.grid}>
        {languages.map(lang => (
          <Card key={lang.id} language={lang} openModal={openModal} />
        ))}
      </div>
      {modalOpen && (
        <Modal onClose={closeModal}>
          <h2>{selectedLang.name}</h2>
          <img src={selectedLang.image} alt={selectedLang.name} width="100" />
          <p>{selectedLang.description}</p>
        </Modal>
      )}
    </main>
  );
}
