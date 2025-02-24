import React from "react";
import Card from "./Card";

function Tours({ tours, tourDel }) {
  return (
    <div className="container">
      <div>
        <h1 className="title">Plan with Love</h1>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return <Card {...tour} tourDel={tourDel}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tours;
