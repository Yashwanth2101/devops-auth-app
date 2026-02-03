const express = require("express");
const login = require("./auth");

const app = express();
app.use(express.json());

app.post("/login", login);

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
