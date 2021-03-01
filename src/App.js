import logo from "./logo.svg";
import "./App.css";

function App() {
  const apiUrl = "";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log("this is the data", data));

  return (
    <div className="App">
      <h1> check the console</h1>
    </div>
  );
}

export default App;
