import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

interface TemperatureReading {
  timestamp: number;
  temperature: number;
}

let tempReadings: TemperatureReading[] = [];

const generateRandomTemperature = (): number => {
  const min = 36.0;
  const max = 38.0;
  return Math.random() * (max - min) + min;
};

const storeTemperatureReadings = () => {
  let counter = 0;

  const intervalId = setInterval(() => {
    if (counter < 60 * 5) {
      const timestamp = Date.now();
      const temperature = generateRandomTemperature();
      tempReadings.push({ timestamp, temperature });
      counter++;
    } else {
      clearInterval(intervalId);
      console.log("Stopped creating temperature readings");
    }
  }, 1000);
};

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  storeTemperatureReadings();
});
