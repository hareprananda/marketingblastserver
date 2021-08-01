import express from "express";
import V1ApiRoute from "../api/v1/routes/api";

export default (app: express.Application) => {
  app.use("/api/v1", V1ApiRoute);

  app.get("*", (req, res) => res.status(400).send("Not found"));
};
