function Note({ notes }) {
  return (
    <div>
      {notes.map((note) => (
        <p key={note.id}>{note.content}</p>
      ))}
    </div>
  );
}

export default Note;
