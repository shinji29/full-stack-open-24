const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
require("dotenv").configDotenv();

const personRouter = require("./routes/person.route");
const infoRouter = require("./routes/info.route");

const PORT = process.env.PORT || 3001;
const ORIGIN_URL = process.env.ORIGIN_URL;
const app = express();

// Middleware for unknown endpoints ...
const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: "This endpoint does not exist." });
};

app.use(cors());

// app.use(
//   cors({
//     origin: ORIGIN_URL,
//     methods: ["GET", "POST"],
//   })
// );

app.use(express.json());

app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello friend.",
  });
});

app.use("/info", infoRouter);
app.use("/api/persons", personRouter);
app.use(unknownEndpoint);

/*

// Alternatively, for unknown endpoints ...

app.get("*", (req, res) => {
  res.status(404).send(`
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
        <h2>Oops!</h2>
        <p>It seems like you are lost, my friend.</p>
    </div>
    `);
});

*/

app.listen(PORT, () => {
  console.log(`\nServer is live on port ${PORT} 🌐\n`);
});
