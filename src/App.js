import { useCallback, useState } from "react";
import "./App.css";
import { BIG_LETTERS, SMALL_LETTERS } from "./utils/constants";
import { PasswordList } from "./components/PasswordList";
import { PasswordForm } from "./components/PasswordForm";

function App() {
  const [charCount, setCharCount] = useState(6);
  const [passwords, setPasswords] = useState([]);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const LETTERS = [...SMALL_LETTERS, ...BIG_LETTERS];
      const password = Array.from({ length: charCount })
        .map(() => {
          const randomNumber = Math.floor(
            Math.random() * (LETTERS.length - 0) + 0
          );
          return LETTERS[randomNumber];
        })
        .join("");
      setPasswords((prev) => [...prev, password]);
    },
    [charCount]
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>Password Generator</p>
      </header>
      <section>
        <PasswordForm
          charCount={charCount}
          setCharCount={setCharCount}
          submitHandler={submitHandler}
        />

        <PasswordList passwords={passwords} />
      </section>
    </div>
  );
}

export default App;
