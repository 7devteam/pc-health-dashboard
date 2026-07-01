import "./TopRiskPCs.css";

const riskData = [
  { id: "PC-104", risk: "95%", status: "Critical" },
  { id: "PC-087", risk: "82%", status: "Warning" },
  { id: "PC-021", risk: "79%", status: "Warning" },
  { id: "PC-056", risk: "65%", status: "Healthy" },
];

function TopRiskPCs() {
  return (
    <div className="risk-card">
      <h2>Top PCs at Risk</h2>

      {riskData.map((pc) => (
        <div className="risk-item" key={pc.id}>
          <div>
            <h4>{pc.id}</h4>
            <span>{pc.status}</span>
          </div>

          <div
            className={`risk-badge ${
              pc.status === "Critical"
                ? "critical"
                : pc.status === "Warning"
                ? "warning"
                : "healthy"
            }`}
          >
            {pc.risk}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopRiskPCs;