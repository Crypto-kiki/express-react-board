import express, { Express, urlencoded } from "express";
import cors from "cors";

const app: Express = express();
const port: Number = +process.env.PORT! | 3010;

// midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONT_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello Express TS!");
});

app.listen(port, () => {
  console.log(`📡 Server is listening on port! ${port}`);
});
