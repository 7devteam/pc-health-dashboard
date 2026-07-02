import "./DeviceHeader.css";
import { ArrowLeft, RefreshCw, Settings } from "lucide-react";

function DeviceHeader() {
  return (
    <div className="device-header">

      <div className="device-left">

        <button className="back-btn">
          <ArrowLeft size={18} />
        </button>

        <div>
          <h2>PC-001</h2>

          <p>
            DESKTOP-PC001 • Windows 11 Pro • 64-bit
          </p>
        </div>

        <span className="status healthy">
          Healthy
        </span>

      </div>

      <div className="device-right">

        <button className="header-btn">
          Auto Refresh
        </button>

        <button className="icon-btn">
          <RefreshCw size={18}/>
        </button>

        <button className="icon-btn">
          <Settings size={18}/>
        </button>

      </div>

    </div>
  );
}

export default DeviceHeader;