import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Somiya Singh"
        School="Vig English School"
        total={284}
        goal={300}
      />
    </div>
  );
}

export default App;
