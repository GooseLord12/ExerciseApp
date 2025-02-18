import React, { useState } from "react";
import PropTypes from "prop-types";

function DurationExercise({ name }) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    React.useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = () => {
        const minutes = String(Math.floor(time / 60)).padStart(2, "0");
        const seconds = String(time % 60).padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div>
            <h2>{name}</h2>
            <p>Time: {formatTime()}</p>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
        </div>
    );
}

DurationExercise.propTypes = {
    name: PropTypes.string.isRequired,
};

export default DurationExercise;