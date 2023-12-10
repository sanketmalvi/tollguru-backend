import cors from "cors";
import axios from "axios";
import express from "express";

const app = express();
app.use(cors());

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  axios
    .post(
      "https://apis.tollguru.com/toll/v2/origin-destination-waypoints/",
      req.body,
      {
        headers: {
          "x-api-key": "MRbPBfGFrhMhpD2pJNJ6Pp82n3QLLqR7",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Something went wrong");
    });
});

app.listen(port, () => {
  console.log("Started!");
});
