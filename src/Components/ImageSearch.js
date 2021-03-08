import React from "react";

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
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search images here"
          value={inputText}
          onChange={(event) => changeHandler(event)}
        />
      </form>
      <button onClick={() => props.setSearchText(inputText)}>search</button>
    </div>
  );
};

export default ImageSearch;
