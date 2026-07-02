import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function PCDetails() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <Topbar />

        <h1 style={{ color: "white", padding: "30px" }}>
          PC Details Page
        </h1>
      </main>
    </div>
  );
}

export default PCDetails;