import "./PredictiveMaintenance.css";

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const data = [

    {day:"Mon",healthy:120,warning:8,critical:2},

    {day:"Tue",healthy:118,warning:9,critical:3},

    {day:"Wed",healthy:115,warning:10,critical:5},

    {day:"Thu",healthy:112,warning:12,critical:6},

    {day:"Fri",healthy:110,warning:15,critical:8},

    {day:"Sat",healthy:108,warning:17,critical:9},

    {day:"Sun",healthy:105,warning:20,critical:10},

];

function PredictiveMaintenance(){

    return(

        <div className="prediction-card">

            <h2>Predictive Maintenance</h2>

            <p>
                Predicted PC health trend over the next 7 days
            </p>

            <div className="chart">

                <ResponsiveContainer
                    width="100%"
                    height={320}
                >

                    <LineChart data={data}>

                        <CartesianGrid strokeDasharray="4 4"/>

                        <XAxis dataKey="day"/>

                        <YAxis/>

                        <Tooltip/>

                        <Line
                            dataKey="healthy"
                            stroke="#299E47"
                            strokeWidth={3}
                        />

                        <Line
                            dataKey="warning"
                            stroke="#F8961E"
                            strokeWidth={3}
                        />

                        <Line
                            dataKey="critical"
                            stroke="#F94144"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>

    )

}

export default PredictiveMaintenance;