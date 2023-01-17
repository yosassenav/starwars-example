import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://swapi.dev/api/people/?search=")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  const showInputText = () => {
    console.log("Heeeeey!!!!!");
  };
  return (
    <div className="App">
      <h1>Star Wars Examples</h1>
      <input onChange={showInputText} />
    </div>
  );
}

export default App;
