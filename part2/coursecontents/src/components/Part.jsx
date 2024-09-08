const Part = ({ id, name, exercises }) => {
  return (
    <div>
      <p key={id}>
        {name} <b>{exercises}</b>
      </p>
    </div>
  );
};

export default Part;
