const Form = ({ newNote, addNote, handleNoteChange }) => {
  return (
    <>
      <form action="" method="post">
        <input
          type="text"
          name="note"
          id="note"
          placeholder="Add a note ..."
          value={newNote}
          onChange={handleNoteChange}
        />{" "}
        <button type="submit" onClick={addNote}>
          Add Note
        </button>
      </form>
    </>
  );
};

export default Form;
