import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Anecdote = ({ anecdote, vote }) => {
  return (
    <p>
      "{anecdote}" has <b>{vote}</b> votes.
    </p>
  );
};

const Winner = ({ anecdotes, votes }) => {
  const mostVotes = Math.max(...votes);
  if (mostVotes === 0) return <p>No votes have been recorded.</p>;

  const indexMostVotes = votes.indexOf(mostVotes);
  return (
    <Anecdote
      anecdote={anecdotes[indexMostVotes]}
      vote={votes[indexMostVotes]}
    />
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

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const vote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
      <Button onClick={vote} text={"Vote"} />{" "}
      <Button onClick={nextAnecdote} text={"Next Anecdote"} />
      <Header text={"Anecdote with most votes"} />
      <Winner anecdotes={anecdotes} votes={votes} />
    </div>
  );
}

export default App;
