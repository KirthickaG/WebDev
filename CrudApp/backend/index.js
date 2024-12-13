import express from "express";
import mysql, { createConnection } from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "crud_test",
});

db.connect((err) => {
  if (err) {
    console.error("Could not connect to the database:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL database");
});

app.get("/", (req, res) => {
  res.json("Hello this is backen ased");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const q = "SELECT * FROM books WHERE (`id` = ?);";
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books(`title`,`desc`,`cover`, `price`)VALUES(?);";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created successfully");
  });
});

app.delete("/books/:id", (req, res) => {
  const q = "DELETE FROM `books` WHERE (`id` = ?);";
  const id = req.params.id;
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully");
  });
});

app.put("/books/:id", (req, res) => {
  const q =
    "UPDATE `books` SET `title` = ?, `desc` = ?, `cover` = ?, `price` = ? WHERE (`id` = ?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
  ];
  const id = req.params.id;
  db.query(q, [...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated successfully");
  });
});

app.listen(8800, () => {
  console.log("connected to backend");
});
