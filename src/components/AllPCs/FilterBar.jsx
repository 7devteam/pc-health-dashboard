import {
  Search,
  RefreshCw,
  RotateCw,
  Download,
  SlidersHorizontal,
} from "lucide-react";

function FilterBar() {
  return (
    <div className="filter-bar">

    <div className="filter-left">
      {/* Search */}
      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search by PC Name, IP Address or User..."
        />
      </div>

      {/* Filters */}

      <div className="filter-group">

    <label>Department</label>

    <select>

        <option value="">
            All Departments
        </option>

        <option>IT</option>

        <option>Finance</option>

        <option>HR</option>

    </select>

</div>

      <div className="filter-group">

    <label>Location</label>

    <select>

        <option value="">
            All Location
        </option>

        <option>Bengaluru</option>

        <option>Chennai</option>

        <option>Delhi</option>

    </select>

</div>

      <div className="filter-group">

    <label>Operating System</label>

    <select>

        <option value="">
            All OS
        </option>

        <option>Windows</option>

        <option>Linux</option>

        <option>Andriod</option>

    </select>

</div>
<div className="filter-group">

    <label>Health Status</label>

    <select>

        <option value="">
           Healthy
        </option>

        <option>Warning</option>

        <option>Critical</option>

        {/* <option>HR</option> */}

    </select>

</div>

      <div className="filter-group">

    <label>Vendor</label>

    <select>

        <option value="">
           Dell
        </option>

        <option>HP</option>

        <option>Lenovo</option>

        {/* <option>HR</option> */}

    </select>
 </div>
</div>
      {/* Actions */}

      <div className="toolbar-actions">

        <button className="toolbar-btn">
          <RefreshCw size={17} />
          Refresh
        </button>

        <button className="toolbar-btn">
          <RotateCw size={17} />
          Sync
        </button>

        <button className="toolbar-btn">
          <Download size={17} />
          Export
        </button>

        <button className="toolbar-btn">
          <SlidersHorizontal size={17} />
          Filters
        </button>
</div>
     


    </div>
  );
}

export default FilterBar;