import "./HealthStatus.css";

function HealthStatus(){

    return(

        <div className="health-card">

            <h2>
                Health Status of All PCs
            </h2>

            <div className="health-body">

                <div className="donut-placeholder">

                    Chart

                </div>

                <div className="legend">

                    <div className="legend-item">

                        <span className="dot healthy"></span>

                   <span className="legend-label">Healthy</span>

                <strong className="legend-value">90</strong>
    
                 <span className="legend-percent">76.6%</span>

                    </div>

                    <div className="legend-item">

                        <span className="dot warning"></span>
{/* 
                        <span>Warning</span>

                        <strong>20</strong>

                        <span>15.6%</span> */}

                        

                        <span className="legend-label">Warning</span>

<strong className="legend-value">20</strong>

<span className="legend-percent">18.8%</span>

                    </div>

                    <div className="legend-item">

                        <span className="dot critical"></span>

                        {/* <span>Critical</span>

                        <strong>10</strong>

                        <span>7.8%</span> */}

                        <span className="legend-label">Critical</span>

<strong className="legend-value">10</strong>

<span className="legend-percent">4.6%</span>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default HealthStatus;