function Content({ persons, handleDelete }) {
  return (
    <div>
      <h2>All Numbers</h2>
      <table cellPadding={4} cellSpacing={2} border={1}>
        <thead align="center">
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {persons.length === 0 ? (
            <tr>
              <td colSpan={3}>No numbers to show.</td>
            </tr>
          ) : (
            persons.map((person) => (
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Content;
