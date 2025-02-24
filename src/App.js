import React from "react";
import { useState } from "react";
import data from "./data";
import Tours from "./component/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function tourDelete(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div>
        <h1>No tour left. Please refresh</h1>
        <button className="whit-btn" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} tourDel={tourDelete} />
    </div>
  );
};

export default App;
