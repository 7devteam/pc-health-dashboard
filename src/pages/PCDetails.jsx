import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DeviceHeader from "../components/PCDetails/DeviceHeader";

import "../components/PCDetails/PCDetails.css";

function PCDetails() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />

        <DeviceHeader />

        {/* Next Components */}
      </main>
    </div>
  );
}

export default PCDetails;