import React, { useEffect, useState } from "react";
import fetchData from "./fetch";
import CardMaker from "../components/CardMaker";

export default function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, "posts");
  }, []);

  return (
    <div>
      <h2>Posts:</h2>
      <ul>
        {data.map((item) => (
          <CardMaker key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
