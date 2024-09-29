import express from "express";
import { configDotenv } from "dotenv";
configDotenv();

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const currentDate = new Date().toString("en-US");
  res.status(200).render("index", {
    title: "Phonebook",
    count: persons.length,
    currentDate: currentDate,
  });
});

app.get("/api/persons", (req, res) => {
  res.status(200).json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const note = persons.filter((note) => note.id === id);

  if (note.length !== 0) return res.status(200).json(note[0]);
  else
    res.status(404).json({ error: `Person with the id ${id} does not exist.` });
});

app.post("/api/persons/", (req, res) => {
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
});

app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const tbd = persons.filter((note) => note.id === id);

  if (tbd.length === 0)
    return res
      .status(404)
      .json({ error: `Person with the id ${id} does not exist.` });

  persons = persons.filter((note) => note.id !== id);
  res.status(204);
});

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT} 🌐`);
});
