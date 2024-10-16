import { connect, Schema, model } from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

if (process.argv.length < 3) {
  console.log("Provide the password as argument");
  process.exit(1);
}

const password = process.argv[2];
const url = process.env.MONGODB_URL.replace("pwd", password);

connect(url)
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(`Error : ${error}`);
  });

const noteSchema = new Schema(
  {
    content: String,
    important: Boolean,
  },
  {
    timestamps: true,
  }
);

const Note = model("Note", noteSchema);

const note = new Note({
  content: "HTML is easy",
  important: true,
});

note.save().then((result) => {
  console.log("note saved");
});
