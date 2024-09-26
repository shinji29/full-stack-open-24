function Button({ showAll, setShowAll }) {
  return (
    <div>
    <button onClick={() => setShowAll(!showAll)}>
      {showAll ? "Show Important" : "Show All Notes"}
    </button>
    </div>
  );
}

export default Button;
