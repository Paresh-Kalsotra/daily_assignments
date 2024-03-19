import React from "react";

const CardMaker = (props) => {
  return <li style={{ padding: "10px" }}>{JSON.stringify(props.item)}</li>;
};

export default CardMaker;
