import { Request, Response } from "express";
import { tempReadings } from "../services/temperatureService";

export const getTemperatures = (req: Request, res: Response) => {
  res.json(tempReadings);
};
