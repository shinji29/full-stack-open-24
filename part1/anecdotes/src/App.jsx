import { useState } from "react";
import "./styles/App.css";

const Header = ({ text }) => <h1 className="header">{text}</h1>;

const Button = ({ onClick, text }) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

const Anecdote = ({ anecdote, vote }) => {
  return (
    <p className="content">
      "{anecdote}" has <b>{vote}</b> votes.
    </p>
  );
};

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(anecdotes.map((_) => 0));
  const [selected, setSelected] = useState(0);
  const [mostVotes, setMostVotes] = useState(0);

  const vote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);

    if (newVotes[selected] > votes[mostVotes]) setMostVotes(selected);
  };

  const nextAnecdote = () => {
    while (true) {
      const nextIndex = Math.floor(Math.random() * anecdotes.length);
      if (nextIndex !== selected) {
        setSelected(nextIndex);
        break;
      }
    }
  };

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
      <span className="btns">
        <Button onClick={vote} text={"Vote"} />
        <Button onClick={nextAnecdote} text={"Next"} />
      </span>
      <Header text={"Anecdote with most votes"} />
      {Math.max(...votes) === 0 ? (
        <p className="content">No votes have been recorded yet.</p>
      ) : (
        <Anecdote anecdote={anecdotes[mostVotes]} vote={votes[mostVotes]} />
      )}
    </div>
  );
}

export default App;
