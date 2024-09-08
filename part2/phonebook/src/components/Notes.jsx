const Notes = ({ notes, showAll }) => {
  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <ul>
      {notesToShow.map((note) => (
        <li key={note.id}>{note.content}</li>
      ))}
    </ul>
  );
};

export default Notes;
