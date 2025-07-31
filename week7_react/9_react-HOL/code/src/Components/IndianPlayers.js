// src/Components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = [
    { label: "First", name: "Sachin", num: 1 },
    { label: "Third", name: "Virat", num: 3 },
    { label: "Fifth", name: "Yuvaraj", num: 5 },
  ];

  const evenPlayers = [
    { label: "Second", name: "Dhoni", num: 2 },
    { label: "Fourth", name: "Rohit", num: 4 },
    { label: "Sixth", name: "Raina", num: 6 },
  ];

  const T20players = ["Mr. First Player", "Mr. Second Player", "Mr. Third Player"];
  const RanjiPlayers = ["Mr. Fourth Player", "Mr. Fifth Player", "Mr. Sixth Player"];

  const allPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul style={{listStyleType:"disc",color:"black"}}>
        {oddPlayers.map((p, i) => (
          <li key={i}>{p.label} : {p.name}{p.num}</li>
        ))}
      </ul>

      <h2>Even Players</h2>
      <ul>
        {evenPlayers.map((p, i) => (
          <li key={i}>{p.label} : {p.name}{p.num}</li>
        ))}
      </ul>

      <h2>List of Indian Players Merged:</h2>
      <ul style={{listStyleType:"disc",color:"black"}}>
        {allPlayers.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
