import React from "react";

import { TemperatureReading } from "../types";
import {
  Error,
  Temperature,
  TemperatureReadout,
  Text,
  Title,
  Units,
} from "./LatestTemperatureReading.styled";

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
    <>
      <Title>Latest Temperature Reading</Title>
      {latestTemperature ? (
        <>
          <TemperatureReadout>
            <Temperature>
              {latestTemperature.temperature.toFixed(1)}
            </Temperature>
            <Units>°C</Units>
          </TemperatureReadout>
          <Text>{`Last updated at 
          ${new Date(latestTemperature.timestamp).toLocaleTimeString([], {
            hour12: true,
          })}
          `}</Text>
        </>
      ) : (
        <Text>No temperature data available yet</Text>
      )}
      {loading && <Text>Loading...</Text>}
      {error && <Error>{error}</Error>}
    </>
  );
};

export default LatestTemperatureReading;
