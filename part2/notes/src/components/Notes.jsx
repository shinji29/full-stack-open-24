function Notes({ notes, showAll }) {
  return (
    <ul>
      {showAll
        ? notes.map((note) => <li key={note.id}>{note.content}</li>)
        : notes
            .filter((note) => note.important)
            .map((note) => <li key={note.id}>{note.content}</li>)}
    </ul>
  );
}

export default Notes;
