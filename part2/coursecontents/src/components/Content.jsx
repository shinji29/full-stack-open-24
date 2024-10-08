import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p>
        <b>
          Total of {parts.reduce((sum, part) => (sum += part.exercises), 0)}{" "}
          exercises
        </b>
      </p>
    </div>
  );
};

export default Content;
