const FoodEmoji = ({ emoji, onClick }) => {
  return (
    <li onClick={() => onClick(emoji)} className="emoji-list-item">
      {emoji}
    </li>
  );
};

export default FoodEmoji;
