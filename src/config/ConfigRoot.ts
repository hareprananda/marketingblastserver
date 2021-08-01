import express from "express";
import DatabaseConnection from "./DatabaseConnection";
import Routing from "./Routing";

export default (app: express.Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //routing
  Routing(app);

  //database
  DatabaseConnection();
};
