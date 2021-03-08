import "./App.css";
import { useEffect, useState } from "react";
import ImageCard from "./Components/ImageCard";
import ImageSearch from "./Components/ImageSearch";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchString, setSearchString] = useState("");

  const url = "https://pixabay.com/api/?key=17949228-be8f0aed3c84bfb102ac75e40";

  useEffect(() => {
    const fetchData = async () => {
      let updatedUrl = url;
      if (searchString !== "") {
        updatedUrl = updatedUrl + "&q=" + searchString;
      }
      let rawData = await fetch(updatedUrl);
      let data = await rawData.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
    return () => {};
  }, [searchString]);

  return (
    <div className="App">
      <ImageSearch setSearchText={setSearchString} />
      {loading ? "" : data.hits.map((item) => <ImageCard item={item} />)}
    </div>
  );
}

export default App;
