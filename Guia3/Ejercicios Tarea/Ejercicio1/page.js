"use client";
import { useEffect, useState } from "react";
import PlanetSlider from "@/components/PlanetSlider";
import PlanetTabs from "@/components/PlanetTabs";
import styles from "./page.module.css";

export default function Home() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    fetch("/data/planets.json")
      .then((res) => res.json())
      .then((data) => setPlanets(data));
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Planetas del Sistema Solar</h1>
      <PlanetSlider planets={planets} onSelect={setSelectedPlanet} />
      {selectedPlanet && (
        <PlanetTabs planet={selectedPlanet} />
      )}
    </main>
  );
}
