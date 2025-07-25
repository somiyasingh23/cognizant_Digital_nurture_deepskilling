import React from 'react';
import CohortDetails from './CohortDetails';

const cohortList = [
  {
    name: 'Alpha Batch',
    startDate: '2024-06-01',
    status: 'Ongoing',
    coach: 'Priya Singh',
    trainer: 'Ravi Kumar',
  },
  {
    name: 'Beta Batch',
    startDate: '2024-03-15',
    status: 'Completed',
    coach: 'Anita Das',
    trainer: 'Kunal Verma',
  },
  {
    name: 'Gamma Batch',
     startDate: '2024-03-15',
    status: 'Completed',
    coach: 'Somiya Singh',
    trainer: 'Kunal Verma',
  },
  
];

function App() {
  return (
    <div>
      <CohortDetails cohorts={cohortList} />
    </div>
  );
}

export default App;