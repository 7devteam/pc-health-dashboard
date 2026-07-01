import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import HealthStatus from "../components/HealthStatus/HealthStatus";
import StatusOverview from "../components/StatusOverview/StatusOverview";
import PredictiveMaintenance from "../components/PredictiveMaintenance";
import TopRiskPCs from "../components/TopRiskPCs";
import RecentAlerts from "../components/RecentAlerts";
import RecommendedActions from "../components/RecommendedActions";

import {
  Computer,
  ShieldCheck,
  TriangleAlert,
  ShieldAlert,
} from "lucide-react";

import "../App.css";

function Dashboard() {
    return (
        <div className="app">
          <Sidebar />
    
          <div className="content">
            <Topbar />
    
          <div className="dashboard-cards">
    
      <StatCard
        title="Total PCs"
        value="120"
        subtitle="All PCs"
        color="#0F62FE"
        icon={<Computer size={20} />}
      />
    
      <StatCard
        title="Healthy PCs"
        value="105"
        subtitle="87.5%"
        color="#299E47"
        icon={<ShieldCheck size={22} />}
      />
    
      <StatCard
        title="Warning PCs"
        value="10"
        subtitle="8.3%"
        color="#F8961E"
        icon={<TriangleAlert size={22} />}
      />
    
      <StatCard
        title="Critical PCs"
        value="5"
        subtitle="4.2%"
        color="#F94144"
        icon={<ShieldAlert size={22} />}
      />
    
    </div>
    
    
    <div className="main-content-grid">
    
      <div className="left-column">
        <HealthStatus />
        <PredictiveMaintenance />
      </div>
    
      <div className="right-column">
        <StatusOverview />
        <TopRiskPCs />
      </div>
     </div>
      <div className="bottom-grid">
    
        <RecentAlerts />
    
        <RecommendedActions />
    
    </div>
    
    </div>
    
    </div>
        
       
      );
    }

export default Dashboard;