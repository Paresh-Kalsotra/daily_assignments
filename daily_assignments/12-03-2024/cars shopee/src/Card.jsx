// Card.jsx
import React from "react";

const styles = {
  card: {
    border: "1px solid grey",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "10px",
    width: "250px",
  },
  image: {
    width: "250px",
  },
};

const Card = (props) => {
  const car = props.car;
  return (
    <div style={styles.card} className="card">
      <img style={styles.image} src={car.image} alt={car.title} />

      <h3>{car.title}</h3>

      <p>
        <strong>Class:</strong> {car.class}
      </p>
      <p>
        <strong>Production:</strong> {car.start_production}
      </p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
