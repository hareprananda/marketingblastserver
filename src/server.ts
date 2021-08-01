import express from "express";
import ConfigRoot from "./config/ConfigRoot";

const app = express();

const PORT = process.env["PORT"] || 5000;

ConfigRoot(app);

app.listen(PORT, () => console.log(`server start at ${PORT}`));
