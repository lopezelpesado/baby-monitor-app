import LatestTemperatureReading from "./components/LatestTemperatureReading";
import useTemperatureData from "./hooks/useTemperatureData";
import { AppContainer, Heading } from "./App.styled";

function App() {
  const { temperatureData, loading, error } = useTemperatureData();

  return (
    <AppContainer>
      <Heading>Baby Monitor</Heading>
      <LatestTemperatureReading
        temperatureData={temperatureData}
        loading={loading}
        error={error}
      />
    </AppContainer>
  );
}

export default App;
