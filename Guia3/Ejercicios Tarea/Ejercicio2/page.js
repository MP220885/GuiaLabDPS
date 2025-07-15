"use client";
import { useEffect, useState } from "react";
import SalesChart from "@/components/SalesChart";
import YearSelector from "@/components/YearSelector";
import styles from "./page.module.css";

export default function Home() {
  const [salesData, setSalesData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/data/sales.json")
      .then((res) => res.json())
      .then((data) => {
        setSalesData(data);
        setSelectedYear(data[0].año);
        setFilteredData(data[0].ventas);
      });
  }, []);

  useEffect(() => {
    const found = salesData.find((d) => d.año === selectedYear);
    setFilteredData(found ? found.ventas : []);
  }, [selectedYear, salesData]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Ventas Mensuales</h1>
      <YearSelector
        years={salesData.map((d) => d.año)}
        selected={selectedYear}
        onChange={setSelectedYear}
      />
      <SalesChart data={filteredData} />
    </main>
  );
}
