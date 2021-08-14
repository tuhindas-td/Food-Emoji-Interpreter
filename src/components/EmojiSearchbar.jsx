const EmojiSearchbar = ({ input, onInput }) => {
  return (
    <input
      className="emoji-input-bar"
      placeholder="Enter your emoji here"
      onChange={onInput}
    />
  );
};

export default EmojiSearchbar;
