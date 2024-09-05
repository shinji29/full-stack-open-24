import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <span>
        <Button text={"Good"} onClick={handleGood} />{" "}
        <Button text={"Neutral"} onClick={handleNeutral} />{" "}
        <Button text={"Bad"} onClick={handleBad} />
      </span>
      <div>
        <h2>Statistics</h2>
        <p>
          Good <b>{good}</b>
        </p>
        <p>
          Neutral <b>{neutral}</b>
        </p>
        <p>
          Bad <b>{bad}</b>
        </p>
        <p>
          total <b>{total}</b>
        </p>
        <p>
          Average{" "}
          {total > 0 ? <b>{(good * 1 + bad * -1) / total}</b> : <b>0.00</b>}
        </p>
        <p>
          Positive {total > 0 ? <b>{(good / total) * 100}%</b> : <b>0.00%</b>}
        </p>
      </div>
    </div>
  );
};

export default App;
