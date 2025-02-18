import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";


const exercises = [
  { name: "Push-ups", type: "repetition" },
  { name: "Jump Rope", type: "duration" },
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div>
      {!selectedExercise ? (
        <div>
          <h1>Select an Exercise</h1>
          {exercises.map((exercise, index) => (
            <button key={index} onClick={() => setSelectedExercise(exercise)}>
              {exercise.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelectedExercise(null)}>Back</button>
          {selectedExercise.type === "repetition" ? (
            <RepetitionExercise name={selectedExercise.name} />
          ) : (
            <DurationExercise name={selectedExercise.name} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;