import { useState } from "react";
import EmojiMeaning from "./components/EmojiMeaning";
import EmojiSearchbar from "./components/EmojiSearchbar";
import FoodEmoji from "./components/FoodEmoji";
import Footer from "./components/Footer";
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

const emojis = Object.keys(emojiDictionary);

const App = () => {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  const handleEmojiInput = (e) => {
    const userInput = e.target.value;
    let meaning = emojiDictionary[userInput];
    if (!meaning && userInput === "") {
      meaning = "";
    } else if (!meaning) {
      meaning = "Unknown emoji";
    }
    setEmojiMeaning(meaning);
  };

  const handleEmojiClick = (emoji) => {
    const meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  };

  return (
    <div className="container">
      <nav className="navbar">What's this food 🤔</nav>
      <div className="wrapper">
        <EmojiSearchbar onInput={handleEmojiInput} />
        <div className="meaning-container">
          <EmojiMeaning meaning={emojiMeaning} />
          <button className="button" onClick={() => setEmojiMeaning("")}>
            Clear
          </button>
        </div>
        <div>
          <div className="emoji-list-heading">Emojis known to us</div>
          <ul className="emoji-list-container">
            {emojis.map((emoji, i) => {
              return (
                <FoodEmoji key={i} emoji={emoji} onClick={handleEmojiClick} />
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
