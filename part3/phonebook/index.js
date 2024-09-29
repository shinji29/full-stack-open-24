import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

let notes = [
  {
    id: "1",
    content: "HTML is easy.",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript.",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol.",
    important: true,
  },
];

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello friend." });
});

app.get("/api/notes", (req, res) => {
  res.status(200).json({ data: notes });
});

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});
