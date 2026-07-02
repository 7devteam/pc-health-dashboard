function HealthBadge({ status }) {

    const colors = {
        Healthy: "#22c55e",
        Warning: "#f59e0b",
        Critical: "#ef4444"
    };

    return (
        <span
            className="health-badge"
            style={{ backgroundColor: colors[status] }}
        >
            {status}
        </span>
    );
}

export default HealthBadge;