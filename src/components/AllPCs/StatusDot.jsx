function StatusDot({ status }) {

    const online = status === "Online";

    return (
        <div className="status-dot-wrapper">

            <span
                className={`status-dot ${online ? "online" : "offline"}`}
            ></span>

            {status}

        </div>
    );
}

export default StatusDot;