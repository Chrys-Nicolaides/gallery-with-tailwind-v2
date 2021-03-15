import "./App.css";
import { useEffect, useState } from "react";
import ImageCard from "./Components/ImageCard";
import ImageSearch from "./Components/ImageSearch";
import { IoSunny, IoMoon } from "react-icons/io";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchString, setSearchString] = useState("");

  const url = "https://pixabay.com/api/?key=17949228-be8f0aed3c84bfb102ac75e40";

  const [darkTheme, setDarkTheme] = useState(
    localStorage.darkTheme === "true" ||
      (localStorage.darkTheme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const themeChange = () => {
    localStorage.darkTheme = !darkTheme;
    setDarkTheme(!darkTheme);
  };

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
    <div className={"App" + (darkTheme ? " dark" : "")}>
      <div className="bg-gradient-to-b from-purple-50 to-purple-300 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 overflow-x-hidden z-0">
        <div className="flex justify-end mt-40 justify-items-end absolute">
          <button
            className="dark:text-gray-100 text-gray-800"
            onClick={() => themeChange()}
          >
            mode
          </button>
        </div>
        <div className="scrollbar-container bg-transparent m-4 z-0">
          <div className="container mx-auto">
            <ImageSearch setSearchText={setSearchString} />
            {loading ? (
              <div className="second-container bg-purple-100 opacity-5 dark:bg-gray-700 rounded-3xl shadow-sm mx-40 mb-20">
                <h1 className="text-3xl text-center text-gray-300 p-24">
                  Loading...
                </h1>
              </div>
            ) : data.hits.length > 0 ? (
              <div className="second-container bg-purple-100 dark:bg-gray-700 rounded-3xl shadow-sm mx-40 mb-20">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-11 px-16 py-16">
                  {data.hits.map((item) => (
                    <ImageCard item={item} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="second-container bg-gray-700 rounded-3xl shadow-sm mx-40 mb-20">
                <h1 className="text-3xl text-center text-gray-300 p-24">
                  No images found :(
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
