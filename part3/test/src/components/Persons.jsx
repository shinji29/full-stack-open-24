import Message from "./Message";

function Persons({ persons, loading, error }) {
  if (loading || error) return <Message loading={loading} error={error} />;
  else
    return (
      <div className="persons">
        {persons.length === 0 ? (
          <div>
            <p>No contacts to show.</p>
          </div>
        ) : (
          persons.map((person) => (
            <div key={person.id}>
              <h3>{person.name}</h3>
              <p>Contact : {person.number}</p>
            </div>
          ))
        )}
      </div>
    );
}

export default Persons;
