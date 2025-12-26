const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let posts = [];

app.post("/post", (req, res) => {
  posts.push(req.body);
  res.json({ message: "Post added" });
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(4000, () => {
  console.log("Social Media Server running on http://localhost:4000");
});
