function RiskBadge({ risk }) {

    const colors = {
        Low: "#22c55e",
        Medium: "#f59e0b",
        High: "#ef4444"
    };

    return (
        <span
            className="risk-badge"
            style={{ backgroundColor: colors[risk] }}
        >
            {risk}
        </span>
    );
}

export default RiskBadge;