const express = require("express");
const noteModel = require("./db/models/note.model");

const app = express();
app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note created",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Notes fetched Successfully",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = await noteModel.findOneAndDelete({
    _id: id,
  });
});

module.exports = app;
