const YearSelector = ({ years, selected, onChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="year">Seleccionar año: </label>
      <select id="year" value={selected} onChange={(e) => onChange(parseInt(e.target.value))}>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;
