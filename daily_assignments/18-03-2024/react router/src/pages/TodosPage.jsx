import React, { useEffect, useState } from "react";
import fetchData from "./fetch";
import CardMaker from "../components/CardMaker";

export default function Todos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, "todos");
  }, []);

  return (
    <div style={{ minHeight: "85vh" }}>
      <h2>Todos:</h2>
      <ul>
        {data.map((item) => (
          <CardMaker key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
