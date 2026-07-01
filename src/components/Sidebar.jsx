import {
  LayoutDashboard,
  Monitor,
  TriangleAlert,
  Activity,
  FileText,
  BarChart3,
  Settings,
  Computer
} from "lucide-react";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        <Computer size={34} color="#ff4f4f" />

        <div>
          <h2>PC Health</h2>
          <p>Predictive Maintenance</p>
        </div>
      </div>

      <ul className="menu">

        <li className="active">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </li>

        <li>
          <Monitor size={20} />
          <span>All PCs</span>
        </li>

        <li>
          <TriangleAlert size={20} />
          <span>Alerts</span>
        </li>

        <li>
          <Activity size={20} />
          <span>Predictive Maintenance</span>
        </li>

        <li>
          <FileText size={20} />
          <span>Reports</span>
        </li>

        <li>
          <BarChart3 size={20} />
          <span>Analytics</span>
        </li>

        <li>
          <Settings size={20} />
          <span>Settings</span>
        </li>

      </ul>

      <div className="sidebar-footer">
        <p>Last Updated</p>
        <span>26 Jun 2026</span>
      </div>

    </div>
  );
}

export default Sidebar;