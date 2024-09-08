import Header from "./Header";
import Content from "./Content";

const Course = ({ courses }) => {
  return (
    <>
      <Header size={1} text={"Web development curriculum"} />
      {courses.map((course) => (
        <div key={course.id}>
          <Header size={2} text={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
