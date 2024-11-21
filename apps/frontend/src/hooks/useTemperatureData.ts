import { useState, useEffect } from "react";
import { TemperatureReading } from "../types";

const useTemperatureData = () => {
  const [temperatureData, setTemperatureData] = useState<TemperatureReading[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:3000/temperatures");

        if (!response.ok) {
          throw new Error("Failed to get latest temperature data");
        }

        const data: TemperatureReading[] = await response.json();
        setTemperatureData(data);
      } catch (err: unknown) {
        if (err) {
          setError("Failed to get latest temperature data");
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTemperatureData();

    const intervalId = setInterval(fetchTemperatureData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return { temperatureData, loading, error };
};

export default useTemperatureData;
