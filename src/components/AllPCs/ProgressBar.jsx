function ProgressBar({ value }) {

    return (

        <div className="progress">

            <div
                className="progress-fill"
                style={{ width: `${value}%` }}
            />

            <span>{value}%</span>

        </div>

    );

}

export default ProgressBar;