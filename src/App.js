import "./App.css";
import User from "./components/User";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [characters, setCharacters] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    fetch("https://swapi.dev/api/people/?search=" + inputText)
      .then((response) => response.json())
      .then((data) => {
        if (inputText.length > 0) {
          setCharacters(data.results);
        }
      });
  }, [inputText]);

  const filterByName = (evt) => {
    setInputText(evt.target.value);
  };

  const clickOnUser = (character) => {
    setSelectedUser(character);
  };

  const toggleModal = () => {
    setSelectedUser(null);
  };

  return (
    <main>
      {selectedUser ? (
        <Modal character={selectedUser} toggleModal={toggleModal} />
      ) : null}
      <div className="App">
        <h1 className="text-3xl font-bold underline">Star Wars Examples</h1>
        <input onChange={filterByName} />
        <article>{inputText}</article>
        {characters
          ? characters.map((character) => {
              return (
                <User
                  key={character.name}
                  character={character}
                  handleClick={clickOnUser}
                  selectedcharacter={selectedUser}
                />
              );
            })
          : null}
      </div>
    </main>
  );
}

export default App;
