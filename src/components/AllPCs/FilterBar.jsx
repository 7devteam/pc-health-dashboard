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

      {/* Search */}
      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search by PC Name, IP Address or User..."
        />
      </div>

      {/* Filters */}

      <select>
        <option>Department</option>
      </select>

      <select>
        <option>Location</option>
      </select>

      <select>
        <option>Operating System</option>
      </select>

      <select>
        <option>Health Status</option>
      </select>

      <select>
        <option>Vendor</option>
      </select>

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