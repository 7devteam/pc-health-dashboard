import "./RecentAlerts.css";

const alerts = [
  {
    id: "PC-104",
    issue: "CPU Temperature High",
    severity: "Critical",
    time: "2 min ago",
  },
  {
    id: "PC-087",
    issue: "Disk Health Warning",
    severity: "Warning",
    time: "10 min ago",
  },
  {
    id: "PC-021",
    issue: "Memory Usage High",
    severity: "Warning",
    time: "18 min ago",
  },
  {
    id: "PC-056",
    issue: "Network Latency",
    severity: "Info",
    time: "35 min ago",
  },
];

function RecentAlerts() {
  return (
    <div className="recent-alerts-card">
      <h2>Recent Alerts</h2>

      <table>
        <thead>
          <tr>
            <th>PC</th>
            <th>Issue</th>
            <th>Severity</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>{alert.issue}</td>
              <td>
                <span className={alert.severity.toLowerCase()}>
                  {alert.severity}
                </span>
              </td>
              <td>{alert.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentAlerts;