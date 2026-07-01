import SummaryCard from "./SummaryCard";

function SummaryCards() {
  return (
    <div className="summary-cards">

      <SummaryCard title="Total Machines" value="120">
        <p>🟢 Online : 115</p>
        <p>🔴 Offline : 5</p>
      </SummaryCard>

      <SummaryCard title="CPU / GPU Thermal Status">
        <p>🟢 Healthy : 102</p>
        <p>🟡 Warning : 13</p>
        <p>🔴 Critical : 5</p>
      </SummaryCard>

      <SummaryCard title="Storage Health / SMART Status">
        <p>🟢 Healthy : 110</p>
        <p>🟡 Warning : 7</p>
        <p>🔴 C  ritical : 3</p>
      </SummaryCard>

      <SummaryCard title="Memory & Resource Saturation">
        <p>High Memory : 12</p>
        <p>High CPU : 8</p>
        <p>High Disk : 5</p>
      </SummaryCard>

      <SummaryCard title="System Uptime / Reboot Pending">
        <p>Reboot Pending : 4</p>
        <p>Uptime 30 Days : 21</p>
        <p>Uptime 90 Days : 6</p>
      </SummaryCard>

    </div>
  );
}

export default SummaryCards;