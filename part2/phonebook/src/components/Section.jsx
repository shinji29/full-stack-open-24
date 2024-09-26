import Persons from "./Persons";
import Content from "./Content";

function Section({ searchQuery, persons, handleDelete }) {
  const sectionStyle = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: "2rem",
    margin: "10px",
  };

  return (
    <div style={sectionStyle}>
      <Persons
        persons={persons}
        searchQuery={searchQuery}
      />
      <Content persons={persons} handleDelete={handleDelete} />
    </div>
  );
}

export default Section;
