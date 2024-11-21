import express, { Request, Response } from "express";
import cors from "cors";
import { getTemperatures } from "./controllers/temperatureController";
import { storeTemperatureReadings } from "./services/temperatureService";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.get("/temperatures", getTemperatures);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  storeTemperatureReadings();
});
