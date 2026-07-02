import {
    Monitor,
    Thermometer,
    HardDrive,
    MemoryStick,
    Clock3,
    Clock,
} from "lucide-react";

const summaryData = [

    {

        title: "Total Machines",

        value: 120,

        icon: Monitor,

        iconColor: "#2563eb",

        metrics: [

            {
                label: "Online",
                value: 115,
                status: "success"
            },

            {
                label: "Offline",
                value: 5,
                status: "danger"
            }

        ]

    },

    {

        title: "CPU / GPU Thermal",

        icon: Thermometer,

        iconColor: "#ef4444",

        metrics: [

            {
                label: "Healthy",
                value: 102,
                status: "success"
            },

            {
                label: "Warning",
                value: 13,
                status: "warning"
            },

            {
                label: "Critical",
                value: 5,
                status: "danger"
            }

        ]

    },

    {

        title: "Storage Status",

        icon: HardDrive,

        iconColor: "#e4ef44",

        metrics: [

            {
                label: "Healthy Drives",
                value: 102,
                status: "success"
            },

            {
                label: "Warning Drives",
                value: 13,
                status: "warning"
            },

            {
                label: "Critical Drives",
                value: 5,
                status: "danger"
            }

        ]

    },
    {

        title: "Memory Saturation",

        icon: MemoryStick,

        iconColor: "#44ef4d",

        metrics: [

            {
                label: "High Memory Usage(>80%)",
                value: 102,
                status: "success"
            },

            {
                label: "High CPU Usage(>85%)",
                value: 13,
                status: "warning"
            },

            {
                label: "High Disk Usage(>90%)",
                value: 5,
                status: "danger"
            }

        ]

    },

    {

        title: "System Uptime /Reboot Pending",

        icon: Clock,

        iconColor: "#44efe6",

        metrics: [

            {
                label: "Rebbot Pending",
                value: 102,
                status: "success"
            },

            {
                label: "UPtime >30 days",
                value: 13,
                status: "warning"
            },

            {
                label: "UPtime > 90days",
                value: 5,
                status: "danger"
            }

        ]

    }


];

export default summaryData;