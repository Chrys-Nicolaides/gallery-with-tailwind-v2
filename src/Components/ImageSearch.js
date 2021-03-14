import React from "react";
import { IoSearch } from "react-icons/io5";

const ImageSearch = (props) => {
  console.log(props);

  const [inputText, setInputText] = React.useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.setSearchText(inputText);
  };

  const changeHandler = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <h2
        className="text-gray-700 text-opacity-50 text-10xl font-bold -my-10 -ml-16 text-left min-w-max z-50 overflow-visible
      "
      >
        Media Gallery
      </h2>
      <div className="flex justify-center flex-nowrap align-center self-center -mt-28">
        <div className="linear-gradient flex justify-center h-24 min-w-min mb-4 px-1">
          <h1 className="text-white flex justify-center text-8xl font-bold text-center opacity-100 -mt-1">
            Media Gallery.
          </h1>
        </div>
      </div>
      <div className="mt-24 mb-20 grid grid-cols-3 gap-4">
        <form
          onSubmit={submitHandler}
          className="col-start-2 mx-7 border-4 border-gray-600 rounded-full hover:border-gray-500 hover:bg-gray-800 flex justify-around h-14"
        >
          <input
            type="text"
            placeholder="Search images here"
            value={inputText}
            onChange={(event) => changeHandler(event)}
            className="ml-8 text-base placeholder-gray-400 hover:text-gray-300 text-gray-300 appearance-none bg-transparent border-none w-full font-medium mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <div className="flex align-center mx-8 mt-1">
            <button
              onClick={() => props.setSearchText(inputText)}
              className="outline-none focus:outline-none"
            >
              <IoSearch
                className="flex align-center items-center text-gray-500 hover:text-gray-300"
                size={"1.4em"}
                strokeWidth={"1.2em"}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageSearch;
