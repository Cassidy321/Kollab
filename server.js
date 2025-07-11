const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI);

app.get("/", (req, res) => {
  res.json({ message: "API démarrée" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: "Erreur serveur" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
