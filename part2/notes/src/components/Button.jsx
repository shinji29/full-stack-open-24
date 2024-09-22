function Button({ showAll, setShowAll }) {
  return (
    <div>
    <button onClick={() => setShowAll(!showAll)}>
      {showAll ? "Important" : "All Notes"}
    </button>
    </div>
  );
}

export default Button;
