import "./App.css";
import { useEffect, useState } from "react";
import ImageCard from "./Components/ImageCard";
import ImageSearch from "./Components/ImageSearch";
import { IoSunny, IoMoon } from "react-icons/io5";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchString, setSearchString] = useState("");

  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}`;

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
  }, [searchString, url]);

  return (
    <div className={"App" + (darkTheme ? " dark" : "")}>
      <div className="bg-gradient-to-b from-purple-50 to-purple-300 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 overflow-x-hidden z-0">
        <div className="flex justify-end mt-12 justify-items-end w-full absolute">
          <button
            className=" flex items-center justify-center dark:text-gray-400 text-purple-400 w-12 h-12 rounded-md shadow-md outline-none focus:outline-none bg-purple-50 hover:bg-white dark:bg-gray-700 dark:hover:bg-gray-600 m-4"
            onClick={() => themeChange()}
          >
            {darkTheme ? <IoMoon size={"1.3em"} /> : <IoSunny size={"1.4em"} />}
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
