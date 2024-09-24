function Persons({ searchQuery, persons, handleDelete, handleUpdate }) {
  const personsToShow =
    searchQuery.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div>
      <h2>Numbers</h2>
      <table cellPadding={4} cellSpacing={2} border={1}>
        <thead align="center">
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th colSpan={2}>Options</th>
          </tr>
        </thead>
        <tbody>
          {personsToShow.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.number}</td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(person.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Persons;
