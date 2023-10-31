const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const data = require("./games.json");
app.get("/", (request, response) => {
  response.json("You're looking at my root route");
});
function findGameByYear(year) {
  return data.filter((game) => game.year == year || !year);
}
app.get("/games", (request, response) => {
  const games = findGameByYear(request.query.year);
  response.json(games);
});
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));

// url to use query and year http://localhost:8080/games?year=1995
