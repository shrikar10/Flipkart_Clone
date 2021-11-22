import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
//component
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import router from "./routes/routes.js";

dotenv.config();
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);
const URL = process.env.DB_PASSWORD;
const PORT = 8000;
Connection(URL);
app.listen(PORT, () => console.log(`listening on port:${PORT}`));
//data to db
DefaultData();
