import LatestTemperatureReading from "./components/latestTemperatureReading";
import useTemperatureData from "./hooks/useTemperatureData";

function App() {
  const { temperatureData, loading, error } = useTemperatureData();

  return (
    <div>
      <h1>Baby Monitor</h1>
      <LatestTemperatureReading
        temperatureData={temperatureData}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
