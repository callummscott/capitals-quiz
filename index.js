import express from "express";
import pg from "pg";

const app = express();
const port = process.env.PORT || 3000;
const db = new pg.Client({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD
});

async function getNextQuestion() {
  const result = await db.query("SELECT country, capital FROM capitals;");
  const randomQuestion = result.rows[Math.floor(Math.random() * result.rowCount)];
  return randomQuestion;
}

db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let totalCorrect = 0;
let question;;

app.get("/", async (req, res) => {
  console.log("Starting new sequence.");
  question = await getNextQuestion();
  res.render("index.ejs", {
    country: question.country,
    totalScore: totalCorrect
  });
});

app.get("/end", async (req, res) => {
  console.log("Sequence ended.");
  totalCorrect = 0;
  res.render("index.ejs", {
    capital: question.capital,
    totalScore: totalCorrect,
  })
});

app.post("/submit", async (req, res) => {
  const cleanedAnswer = req.body.answer.trim().toLowerCase();
  console.log(`Answer submitted: '${cleanedAnswer}'`);
  const expectedAnswer = (question.capital) ? question.capital.trim().toLowerCase() : '';
  if (expectedAnswer !== cleanedAnswer) {
    console.log("Answer was incorrect, sequence ended.")
    res.redirect("/end");
  } else {
    console.log("Answer was correct.")
    question = await getNextQuestion();
    totalCorrect++;
    res.render("index.ejs", { country: question.country, totalScore: totalCorrect});
  }
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
