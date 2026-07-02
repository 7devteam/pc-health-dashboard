function SummaryCard({

    title,

    value,

    icon: Icon,

    iconColor,

    metrics

}){

    return(

        <div className="summary-card">

            <div className="summary-header">

                <div
                    className="summary-icon"
                    style={{background:iconColor}}
                >

                    <Icon size={20} color="white"/>

                </div>

                <h3>{title}</h3>

            </div>

            {value &&

                <h2>{value}</h2>

            }

            <div className="summary-content">

                {metrics.map((item,index)=>(

                    <div
                        key={index}
                        className="metric-row"
                    >

                       <div className="metric-left">

                <span
                    className={`metric-dot ${item.status}`}
                ></span>

                            {item.label}

                        </div>

                        <strong>{item.value}</strong>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default SummaryCard;