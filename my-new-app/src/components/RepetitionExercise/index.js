import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RepetitionExercise = ({ name }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleReset = () => setCount(0);

    return (
        <div>
            <h2>{name}</h2>
            <p>Repetitions: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

RepetitionExercise.propTypes = {
    name: PropTypes.string.isRequired,
};

export default RepetitionExercise;