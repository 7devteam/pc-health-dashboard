// import {
//     Monitor,
//     Thermometer,
//     HardDrive,
//     MemoryStick,
//     Clock3
// } from "lucide-react";

// import SummaryCard from "./SummaryCard";

// function SummaryCards() {
//   return (
//     <div className="summary-cards">

//      <SummaryCard
//     title="Total Machines"
//     value="120"
//     icon={<Monitor size={20} color="white" />}
//     iconColor="#2563eb"
// >

//     <p>● Online : 115</p>

//     <p>● Offline : 5</p>

// </SummaryCard>

//       <SummaryCard
//     title="CPU / GPU Thermal"
//     icon={<Thermometer size={20} color="white" />}
//     iconColor="#ef4444"
// >
//     <p>Healthy : 102</p>
//     <p>Warning : 13</p>
//     <p>Critical : 5</p>

// </SummaryCard>

// <SummaryCard
//     title="Storage Health"
//     icon={<HardDrive size={20} color="white" />}
//     iconColor="#10b981"
// >
//         <p> Healthy : 110</p>
//         <p> Warning : 7</p>
//         <p> Critical : 3</p>
//       </SummaryCard>

// <SummaryCard
//     title="Memory"
//     icon={<MemoryStick size={20} color="white" />}
//     iconColor="#f59e0b"
// >
//           <p>High Memory : 12</p>
//         <p>High CPU : 8</p>
//         <p>High Disk : 5</p>
//       </SummaryCard>

// <SummaryCard
//     title="System Uptime"
//     icon={<Clock3 size={20} color="white" />}
//     iconColor="#6366f1"
// >
//           <p>Reboot Pending : 4</p>
//         <p>Uptime 30 Days : 21</p>
//         <p>Uptime 90 Days : 6</p>
//       </SummaryCard>

//     </div>
//   );
// }

// export default SummaryCards;

import summaryData from "../../data/summaryData";

import SummaryCard from "./SummaryCard";

function SummaryCards(){

    return(

        <div className="summary-cards">

            {summaryData.map((card,index)=>(

                <SummaryCard

                    key={index}

                    {...card}

                />

            ))}

        </div>

    );

}

export default SummaryCards;