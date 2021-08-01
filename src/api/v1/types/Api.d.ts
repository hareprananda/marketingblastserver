import express from "express";
export type RouteCB = (
  req: express.Request,
  res: express.Response,
  next?: express.NextFunction
) => void;
