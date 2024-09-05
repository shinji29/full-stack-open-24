import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  if (text === "Positive")
    return (
      <tr>
        <td>{text}</td>
        <td> </td>
        <td>
          <b>{value}</b> %
        </td>
      </tr>
    );

  return (
    <tr>
      <td>{text}</td>
      <td> </td>
      <td>
        <b>{value}</b>
      </td>
    </tr>
  );
};

const Statistics = ({ reviews }) => {
  const total = reviews.good + reviews.neutral + reviews.bad;
  if (total === 0) return <p>No feedback given.</p>;

  const positive = total !== 0 ? (reviews.good / total) * 100 : 0.0;
  const average =
    total !== 0 ? (reviews.good * 1 + reviews.bad * -1) / total : 0.0;

  return (
    <table>
      <tbody>
        <Statistic text={"Good"} value={reviews.good} />
        <Statistic text={"Neutral"} value={reviews.neutral} />
        <Statistic text={"Bad"} value={reviews.bad} />
        <Statistic text={"All"} value={total} />
        <Statistic text={"Average"} value={average} />
        <Statistic text={"Positive"} value={positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    setReviews({
      ...reviews,
      good: reviews.good + 1,
    });
  };

  const handleNeutral = () => {
    setReviews({
      ...reviews,
      neutral: reviews.neutral + 1,
    });
  };

  const handleBad = () => {
    setReviews({
      ...reviews,
      bad: reviews.bad + 1,
    });
  };

  return (
    <div>
      <Header text={"Give Feedback"} />
      <Button text={"Good"} onClick={handleGood} />{" "}
      <Button text={"Neutral"} onClick={handleNeutral} />{" "}
      <Button text={"Bad"} onClick={handleBad} />
      <Header text={"Statistics"} />
      <Statistics reviews={reviews} />
    </div>
  );
};

export default App;
