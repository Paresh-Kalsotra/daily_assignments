import { useEffect, useState } from "react";
import fetchData from "./fetch";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData, "users");
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
