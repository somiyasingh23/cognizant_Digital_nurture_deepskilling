import React from "react";
import "./App.css";

function App() {
  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: "https://plus.unsplash.com/premium_photo-1661931749081-23d69ddb62d1?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      Name: "WeWork",
      Rent: 75000,
      Address: "Bangalore",
      Image: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      Name: "Regus",
      Rent: 59000,
      Address: "Mumbai",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3m4KzNaAGRckeWEdsUlxcQPqBHXNvsnvMQ&s"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space , at Affordable Range</h1>
      {offices.map((office, index) => {
        const rentColor = office.Rent <= 60000 ? "textRed" : "textGreen";

        return (
          <div key={index} className="officeCard">
            <img
              src={office.Image}
              width="25%"
              height="25%"
              alt="Office Space"
            />
            <h2>Name: {office.Name}</h2>
            <h3 className={rentColor}>Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
