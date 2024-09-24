function Form({ newName, setNewName, newNumber, setNewNumber, handleSubmit }) {
  return (
    <form>
      <h3>Add New Number</h3>
      <table cellPadding={2} cellSpacing={4}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
                required={true}
              />
            </td>
          </tr>
          <tr>
            <td>Number</td>
            <td>
              <input
                type="text"
                onChange={(e) => setNewNumber(e.target.value)}
                value={newNumber}
                required={true}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="right">
              <button type="submit" onClick={handleSubmit}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Form;
