import { useEffect, useState } from "react";
import fetchData from "./fetch";

export default function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, "posts");
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
