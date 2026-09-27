const mongoose = require("mongoose");

async function connectdB() {
  await mongoose.connect(
    "mongodb+srv://Backend:jdWvKqGM2PhqJvaa@backend.k4iqpqn.mongodb.net/halley",
    console.log("Connected to db bc"),
  );
}
module.exports = connectdB;
