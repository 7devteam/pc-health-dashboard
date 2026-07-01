import allPCs from "../../data/allPCsData";
import PCTableRow from "./PCTableRow";

function PCTable() {
  return (
    <div className="pc-table-container">
      <table className="pc-table">

        <thead>
          <tr>
            <th>PC Name</th>
            <th>User</th>
            <th>Department</th>
            <th>CPU °C</th>
            <th>GPU °C</th>
            <th>RAM %</th>
            <th>Storage</th>
            <th>Health</th>
            <th>Risk</th>
            <th>Uptime</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {allPCs.map((pc) => (

            <PCTableRow
              key={pc.id}
              pc={pc}
            />

          ))}

        </tbody>

      </table>
    </div>
  );
}

export default PCTable;