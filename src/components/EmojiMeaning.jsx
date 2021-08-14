const EmojiMeaning = ({ meaning }) => {
  return (
    <>
      <div className="meaning-heading">
        <span style={{ color: "var(--primary-color)" }}>Meaning</span> will show
        up here 👇
      </div>
      <div className="meaning-text">{meaning}</div>
    </>
  );
};

export default EmojiMeaning;
