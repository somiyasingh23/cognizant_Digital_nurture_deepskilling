// src/Components/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Mr. Jack", score: 50 },
    { name: "Mr. Michael", score: 70 },
    { name: "Mr. John", score: 40 },
    { name: "Mr. Ann", score: 61 },
    { name: "Mr. Elisabeth", score: 61 },
    { name: "Mr. Sachin", score: 95 },
    { name: "Mr. Dhoni", score: 100 },
    { name: "Mr. Virat", score: 84 },
    { name: "Mr. Jadeja", score: 64 },
    { name: "Mr. Raina", score: 75 },
    { name: "Mr. Rohit", score: 80 },
  ];

  return (
    <div>
      <h2>List of Players</h2>
      <ul className="black-bullets">
      {players.map((p, i) => (
        <div key={i}>{p.name} {p.score}</div>
      ))}
</ul>
      <h2>List of Players having Scores Less than 70</h2>
      <ul className="black-bullets">
      {players.filter(p => p.score < 70).map((p, i) => (
        <div key={i}>{p.name} {p.score}</div>
      ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
