const mongoose = require("mongoose");

async function connectdB() {
  await mongoose.connect(
    "mongodb+srv://yt:jP4AQBNgbgOvSVWP@backend.t1tndbv.mongodb.net/halley",
    console.log("Connected to db bc"),
  );
}
module.exports = connectdB;
