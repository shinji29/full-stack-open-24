function Persons({ searchQuery, persons }) {
  return (
    <div>
      <h2>Numbers</h2>
      <table cellPadding={4} cellSpacing={2} border={1}>
        <thead align="left">
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {searchQuery.length === 0
            ? persons.map((person) => (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.number}</td>
                </tr>
              ))
            : persons
                .filter((person) =>
                  person.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((person) => (
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
