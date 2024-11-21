export const generateRandomTemperature = (): number => {
  const min = 36.0;
  const max = 38.0;
  return Math.random() * (max - min) + min;
};
