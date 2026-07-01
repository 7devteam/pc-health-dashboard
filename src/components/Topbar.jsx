import {
  Bell,
  Search,
  CalendarDays,
  CircleUserRound,
} from "lucide-react";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1>Dashboard</h1>
        <p>Health of all PCs.</p>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search PC..." />
        </div>

        <div className="icon-button">
          <Bell size={20} />
        </div>

        <div className="date">
          <CalendarDays size={18} />
          <span>26 Jun 2026</span>
        </div>

        <div className="profile">
          <CircleUserRound size={32} />

          <div>
            <h4>Admin</h4>
            <p>System Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;