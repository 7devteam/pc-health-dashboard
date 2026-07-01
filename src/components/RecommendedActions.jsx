import "./RecommendedActions.css";

function RecommendedActions() {
  return (
    <div className="action-card">

      <h2>Recommended Actions</h2>

      <div className="action-item">
        🔴 Check CPU cooling on <strong>PC-104</strong>
      </div>

      <div className="action-item">
        🟠 Replace SSD soon on <strong>PC-087</strong>
      </div>

      <div className="action-item">
        🟠 Increase RAM allocation on <strong>PC-021</strong>
      </div>

      <div className="action-item">
        🟢 Continue monitoring <strong>PC-056</strong>
      </div>

    </div>
  );
}

export default RecommendedActions;