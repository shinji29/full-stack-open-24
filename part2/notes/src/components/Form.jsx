function Form({ addNote, newNote, handleNoteChange }) {
  return (
    <form onSubmit={addNote}>
      <table>
        <thead>
          <tr>
            <th>Add a new note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="newNote">Enter content : </label>
            </td>
            <td>
              <input
                value={newNote}
                onChange={handleNoteChange}
                name="newNote"
                placeholder="Sample text ..."
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align={"right"}>
              <button type="submit">Add note</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Form;
