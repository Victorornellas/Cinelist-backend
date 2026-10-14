require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const favoritesRoutes = require("./routes/favorites");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  if (req.method === "OPTIONS") return res.sendStatus(200)
  next()
})
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado ao MongoDB"))
.catch((err) => console.log("Erro ao conectar ao MongoDB:", err));

app.use("/favorites", favoritesRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))