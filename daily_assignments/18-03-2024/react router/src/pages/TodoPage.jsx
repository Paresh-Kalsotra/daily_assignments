import { useEffect, useState } from "react";
import fetchData from "./fetch";

export default function Todos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, "todos");
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
