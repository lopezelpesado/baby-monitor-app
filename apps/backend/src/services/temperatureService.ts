import { generateRandomTemperature } from "../utils/temperatureUtils";

export interface TemperatureReading {
  timestamp: number;
  temperature: number;
}

export let tempReadings: TemperatureReading[] = [];

export const storeTemperatureReadings = () => {
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
