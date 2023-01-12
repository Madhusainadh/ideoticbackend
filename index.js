const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./Users/userRouter");
// const clientRouter = require("./Features/Clients/clientRouter");
// const projectRouter = require("./Features/Projects/projectsRouter");
// const taskRouter = require("./Features/Tasks/tasksRouter");
const connect = require("./Config/config");
const { default: axios } = require("axios");

require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", true);
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("hello World"));
app.get("/list", async (req, res) => {
  try {
    let arr = [];
    let { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
    let obj = data.message;
    for (var key in obj) {
      arr.push(key);
    }
    res.status(200).send(arr);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.get("/dog", async (req, res) => {
  try {
    let arr = [];
    let { data } = await axios.get(
      "https://dog.ceo/api/breed/Affenpinscher/images/random"
    );
    let obj = data.message;
    for (var key in obj) {
      arr.push(key);
    }
    res.status(200).send(arr);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.use("/users", userRouter);

// app.use("/clients", clientRouter);
app.listen(PORT, async () => {
  await connect();
  console.log("User heat the server!!");
});
