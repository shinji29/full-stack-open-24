function Notes({ notes, showAll, deletion, toggleImportance }) {
  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <table border={1} cellPadding={4} cellSpacing={2}>
      <tbody>
        {notesToShow.length === 0 ? (
          <tr>
            <th>No notes to show.</th>
          </tr>
        ) : (
          notesToShow.map((note) => (
            <tr key={note.id}>
              <td className={"note"}>{note.content}</td>
              <td>
                <button onClick={() => toggleImportance(note.id)}>
                  {note.important ? "Mark unimportant" : "Mark important"}
                </button>
              </td>
              <td>
                <button onClick={() => deletion(note.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Notes;
