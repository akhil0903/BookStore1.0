import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

// let express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to the Book Store");
});

app.post("/book", async (request, response) => {
  try {
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Port ${PORT} is running....`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
