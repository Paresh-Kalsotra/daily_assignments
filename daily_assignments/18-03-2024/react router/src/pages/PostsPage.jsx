import React, { useEffect, useState } from "react";
import fetchData from "./fetch";

export default function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, "posts");
  }, []);

  return (
    <div>
      <h2>Posts Data</h2>

      {JSON.stringify(data)}
    </div>
  );
}
