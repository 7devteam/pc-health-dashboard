import "./StatCard.css";

function StatCard({
    title,
    value,
    subtitle,
    color,
    icon
}) {

    return (

        <div className="stat-card">

            <div className="card-header">

                <span className="card-title">
                    {title}
                </span>

                <div
                    className="card-icon"
                    style={{background:color}}
                >
                    {icon}
                </div>

            </div>

            <h2 className="card-value">
                {value}
            </h2>

            <div className="card-footer">

                <span>
                    {subtitle}
                </span>

            </div>

        </div>

    );

}

export default StatCard;