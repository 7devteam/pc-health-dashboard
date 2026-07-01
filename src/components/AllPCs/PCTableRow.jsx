function PCTableRow({ pc }) {
  return (
    <tr>

      <td>{pc.name}</td>

      <td>{pc.user}</td>

      <td>{pc.department}</td>

      <td>{pc.cpuTemp}°C</td>

      <td>{pc.gpuTemp}°C</td>

      <td>{pc.ram}%</td>

      <td>{pc.storage}</td>

      <td>{pc.health}</td>

      <td>{pc.risk}</td>

      <td>{pc.uptime}</td>

      <td>{pc.lastSeen}</td>

    </tr>
  );
}

export default PCTableRow;