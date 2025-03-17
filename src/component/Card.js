import React, { useState } from "react";

function Card({ image, id, info, name, price, tourDel }) {
  const [readmore, setReadMore] = useState();
  const description = info.substring(0, 200) + "...";

  function handleReadMore() {
    // setReadMore(!readmore);
    setReadMore((prev) => !prev);
  }
  return (
    <div className="card">
      <div>
        <img className="image" alt="card " src={image}></img>
        <div>
          <div className="tour-info">
            <h2 className="tour-price">{price}</h2>
            <h1 className="tour-name">{name}</h1>
          </div>

          <div className="tour-details">
            {readmore ? info : description}
            <span className="read-more" onClick={handleReadMore}>
              {readmore ? "show less" : "read more"}
            </span>
          </div>
        </div>
        <div>
          <button className="btn-red" onClick={() => tourDel(id)}>
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
