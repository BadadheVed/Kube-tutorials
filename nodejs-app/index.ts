import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/login", (req, res) => {
  console.log("login route");
  res.send("Login Route");
});

app.get("/hi", (req, res) => {
  res.send("Hi there, this is the hi route");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
