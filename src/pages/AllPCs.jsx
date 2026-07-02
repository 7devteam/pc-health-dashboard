import Sidebar from "../components/Sidebar";
// import Topbar from "../components/Topbar";

import SummaryCards from "../components/AllPCs/SummaryCards";
import FilterBar from "../components/AllPCs/FilterBar";
import PCTable from "../components/AllPCs/PCTable";
import Pagination from "../components/AllPCs/Pagination";

function AllPCs() {
  return (
    <div className="app">
      <Sidebar />

      <div className="content">
        {/* <Topbar /> */}

        <SummaryCards />

        <FilterBar />

        <PCTable />

        <Pagination />
      </div>
    </div>
  );
}

export default AllPCs;