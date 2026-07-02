import {
  LayoutDashboard,
  Monitor,
  TriangleAlert,
  Activity,
  FileText,
  BarChart3,
  Settings,
  Computer,
} from "lucide-react";

import { NavLink } from "react-router-dom";

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
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/all-pcs"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            <Monitor size={20} />
            <span>All PCs</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/pc-details"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            <TriangleAlert size={20} />
            <span>PC Details</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/predictive-maintenance"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            <Activity size={20} />
            <span>Predictive Maintenance</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            <FileText size={20} />
            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            <BarChart3 size={20} />
            <span>Analytics</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
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