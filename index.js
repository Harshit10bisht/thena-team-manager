const express = require("express");
const app = express();
const teamsRouter = require("./routes/teams.js");
require("dotenv").config();
require("./db/mongoose.js");
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(teamsRouter);

// app.get("/", (req, res) => {
//   console.log("HELLO GUYS");
//   res.send({ data: "HELLO" });
// });

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
