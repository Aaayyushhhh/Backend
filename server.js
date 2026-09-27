const app = require("./src/app");
const connectdB = require("./src/db/db");

connectdB();

app.listen(3000, () => {
  console.log("server is running bc");
});
