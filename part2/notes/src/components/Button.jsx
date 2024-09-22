function Button({ showAll, setShowAll }) {
  return (
    <button onClick={() => setShowAll(!showAll)}>
      {showAll ? "Important" : "All Notes"}
    </button>
  );
}

export default Button;
