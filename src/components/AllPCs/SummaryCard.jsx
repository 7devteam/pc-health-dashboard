function SummaryCard({ title, value, children }) {
  return (
    <div className="summary-card">
      <h3>{title}</h3>

      {value && <h2>{value}</h2>}

      <div className="summary-content">
        {children}
      </div>
    </div>
  );
}

export default SummaryCard;