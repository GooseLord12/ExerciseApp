import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./RunningExercise";

const exercises = [
  { name: "Push-ups", type: "repetition" },
  { name: "Jump Rope", type: "duration" },
  { name: "Running", type: "running" },
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
          ) : selectedExercise.type === "duration" ? (
            <DurationExercise name={selectedExercise.name} />
          ) : (
            <RunningExercise />
          )}
        </div>
      )}
    </div>
  );
}

export default App;