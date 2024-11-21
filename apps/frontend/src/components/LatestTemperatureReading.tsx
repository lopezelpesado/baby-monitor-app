import React from "react";
import { TemperatureReading } from "../types";

interface LatestTemperatureReadingProps {
  temperatureData: TemperatureReading[];
  loading: boolean;
  error: string | null;
}

const LatestTemperatureReading: React.FC<LatestTemperatureReadingProps> = ({
  temperatureData,
  loading,
  error,
}) => {
  const latestTemperature =
    temperatureData.length > 0
      ? temperatureData[temperatureData.length - 1]
      : null;

  return (
    <div>
      <h2>Latest Temperature Reading</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {latestTemperature ? (
        <p>
          {`${latestTemperature.temperature.toFixed(1)}°C at ${new Date(
            latestTemperature.timestamp
          ).toLocaleTimeString()}`}
        </p>
      ) : (
        <p>No temperature data available yet.</p>
      )}
    </div>
  );
};

export default LatestTemperatureReading;
