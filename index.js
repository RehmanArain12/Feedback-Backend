require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const route = require("./Routes/route");
const Port = 3900;

mongoose
  .connect(process.env.MONGODB)
  .then((res) => console.log(`MongoDB Connected...`))
  .catch((err) => console.log("internel error server "));
app.use(express.json());
const corsOptions = {
  origin: "https://feedback-bgy.pages.dev",
  methods: ["GET", "PUT", "POST", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use("/api", route);

app.listen(Port, () => console.log(`My server is ready localhost:${Port}`));
