const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} <b>{exercises}</b>
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} {...part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      <b>Number of exercises</b>{" "}
      {props.parts.reduce((sum, part) => sum + part.exercises, 0)}
    </p>
  );
};

export default App;
