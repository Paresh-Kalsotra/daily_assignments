import React, { useEffect, useState } from "react";
import fetchData from "./fetch";
import CardMaker from "../components/CardMaker";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, "users");
  }, []);

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {data.map((item) => (
          <CardMaker key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
