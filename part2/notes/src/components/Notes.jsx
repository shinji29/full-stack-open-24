function Notes({ notes, showAll, toggleImportance }) {
  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <table border={1} cellPadding={4} cellSpacing={2}>
      <tbody>
        {notesToShow.length === 0 ? (
          <tr>
            <th>No important notes</th>
          </tr>
        ) : (
          notesToShow.map((note) => (
            <tr key={note.id}>
              <td>{note.content}</td>
              <td>
                <button onClick={() => toggleImportance(note.id)}>
                  {note.important ? "Mark unimportant" : "Mark important"}
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Notes;
