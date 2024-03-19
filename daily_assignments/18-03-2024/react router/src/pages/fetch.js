const url = "https://jsonplaceholder.typicode.com/";

async function fetchData(setData, route) {
  try {
    const response = await fetch(url + route);

    const data = await response.json();
    setData(data.slice(0, 5));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default fetchData;
