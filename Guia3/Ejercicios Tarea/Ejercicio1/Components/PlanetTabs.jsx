import { useState } from "react";
import styles from "./PlanetTabs.module.css";

const PlanetTabs = ({ planet }) => {
  const [tab, setTab] = useState("masa");

  return (
    <div className={styles.tabs}>
      <h2>{planet.name}</h2>
      <div className={styles.tabHeader}>
        <button onClick={() => setTab("masa")}>Masa</button>
        <button onClick={() => setTab("distancia_al_sol")}>Distancia al Sol</button>
        <button onClick={() => setTab("temperatura")}>Temperatura</button>
      </div>
      <div className={styles.tabContent}>
        {tab === "masa" && <p><strong>Masa:</strong> {planet.details.masa}</p>}
        {tab === "distancia_al_sol" && <p><strong>Distancia al Sol:</strong> {planet.details.distancia_al_sol}</p>}
        {tab === "temperatura" && <p><strong>Temperatura:</strong> {planet.details.temperatura}</p>}
      </div>
    </div>
  );
};

export default PlanetTabs;
