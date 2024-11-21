import { styled } from "styled-components";

export const Title = styled.h2`
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

export const TemperatureReadout = styled.div`
  display: flex;
`;

export const Temperature = styled.p`
  margin-block: 1rem;
  font-size: 4rem;
`;

export const Units = styled.p`
  font-size: 2rem;
`;

export const Text = styled.p`
  margin-block: 1rem;
`;

export const Error = styled(Text)`
  color: darkred;
`;
