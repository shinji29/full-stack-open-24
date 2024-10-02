let persons = require("../data/persons.data");

const getAllPersons = (req, res) => {
  res.status(200).json(persons);
};

const getPersonById = (req, res) => {
  const { id } = req.params;
  const note = persons.filter((note) => note.id === id);

  if (note.length !== 0) return res.status(200).json(note[0]);
  else
    res.status(404).json({ error: `Person with the id ${id} does not exist.` });
};

const createPerson = (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "Person is missing a name or a number.",
    });
  }

  const duplicate = persons.filter((person) => person.name === body.name);
  if (duplicate.length !== 0) {
    return res.status(400).json({
      error: `${body.name} already exists in the phonebook. Name must be unique.`,
    });
  }

  const newPerson = {
    id: Math.floor(Math.random() * 1e6),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(newPerson);
  res.status(201).json({ message: `${newPerson.name} added.` });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const tbd = persons.filter((note) => note.id === id);

  if (tbd.length === 0)
    return res
      .status(404)
      .json({ error: `Person with the id ${id} does not exist.` });

  persons = persons.filter((note) => note.id !== id);
  res.status(204);
};

module.exports = {
  getAllPersons,
  getPersonById,
  createPerson,
  deletePerson,
};
