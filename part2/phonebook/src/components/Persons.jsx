function Persons({ searchQuery, persons }) {
  const personsToShow =
    searchQuery.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div>
      <h2>Filtered Numbers</h2>
      <table cellPadding={4} cellSpacing={2} border={1}>
        <thead align="center">
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {personsToShow.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Persons;
