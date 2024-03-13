// Card.jsx
import React from "react";

const Card = (props) => {
  const car = props.car;
  return (
    <div className="card">
      <img style={{ width: "250px" }} src={car.image} alt={car.title} />

      <h3>{car.title}</h3>

      <p>
        <strong>Class:</strong> {car.class}
      </p>
      <p>
        <strong>Production:</strong> {car.start_production}
      </p>
      <button>Book Now!</button>
    </div>
  );
};

export default Card;
