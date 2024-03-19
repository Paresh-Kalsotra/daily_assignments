import React, { useEffect, useState } from "react";
import fetchData from "./fetch";

export default function Todos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, "todos");
  }, []);

  return (
    <div>
      <h2>Todo Data</h2>
      {JSON.stringify(data)}
    </div>
  );
}
