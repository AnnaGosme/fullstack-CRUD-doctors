const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "ANNA_GOSME",
  host: "localhost",
  password: "$AnnaPassword11122019",
  database: "Clinic",
});

app.get("/doctors/all", (req, res) => {
  db.query("SELECT * FROM doctors", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/doctors/new", (req, res) => {
  console.log(req.body);
  const lastname = req.body.lastname;
  const firstname = req.body.firstname;
  const speciality = req.body.speciality;
  const grade = req.body.grade;
  const disability = req.body.disability;

  db.query(
    "INSERT INTO doctors (lastname, firstname, speciality, grade, disability) VALUES (?, ?, ?, ?, ?)",
    [lastname, firstname, speciality, grade, disability],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json("values inserted");
      }
    }
  );
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
