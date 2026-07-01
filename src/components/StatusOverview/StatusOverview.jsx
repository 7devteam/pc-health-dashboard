import "./StatusOverview.css";

import {
    ShieldCheck,
    TriangleAlert,
    ShieldAlert
} from "lucide-react";

function StatusOverview(){

    return(

        <div className="overview-card">

            <h3>Status Overview</h3>

            <div className="overview-list">

                <div className="overview-item">

                    <ShieldCheck color="#299E47"/>

                    <div>

                        <h4>Healthy</h4>

                        <p>PCs are operating normally.</p>

                    </div>

                </div>

                <div className="overview-item">

                    <TriangleAlert color="#F8961E"/>

                    <div>

                        <h4>Warning</h4>

                        <p>Potential issues detected.</p>

                    </div>

                </div>

                <div className="overview-item">

                    <ShieldAlert color="#F94144"/>

                    <div>

                        <h4>Critical</h4>

                        <p>Immediate attention required.</p>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default StatusOverview;