import React, { useEffect, useState } from "react";
import fetchData from "./fetch";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, "users");
  }, []);

  return (
    <div>
      <h2>User Data</h2>
      {JSON.stringify(data)}
    </div>
  );
}
