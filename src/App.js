import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "https://pixabay.com/api/?key=17949228-be8f0aed3c84bfb102ac75e40";

  const fetchData = async () => {
    let rawData = await fetch(url);
    let data = await rawData.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h2>You have clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>click me</button>
      {loading ? "" : <div>{data.hits[0].id}</div>}
    </div>
  );
}

export default App;
