import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍕": "Pizza",
  "🥪": "Sandwich",
  "🍨": "Ice cream",
  "🎂": "Birthday cake",
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We dont have it in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>Food Emoji Interpreter</nav>
      <input placeholder="Enter your emoji here" onChange={emojiInputHandler}></input>
      <h2><span style={{color: "var(--primary-color"}}>Meaning</span> will show up here 👇</h2>
      <div className="meaning">{meaning}</div>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
