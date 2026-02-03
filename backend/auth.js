const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db");

async function login(req, res) {
  const { username, password } = req.body;

  const result = await db.query(
    "SELECT password_hash FROM users WHERE username=$1",
    [username]
  );

  if (result.rows.length === 0) {
    return res.status(401).send("User not found");
  }

  const isValid = await bcrypt.compare(
    password,
    result.rows[0].password_hash
  );

  if (!isValid) {
    return res.status(401).send("Invalid credentials");
  }

  const token = jwt.sign(
    { username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
}

module.exports = login;
