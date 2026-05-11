import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function toggleLight(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light,
      ),
    );
    // setIsOn((isOn) => !isOn);
  }

  function handleTurnAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleTurnAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  const lightedLights = lights
    .map((light) => light.isOn === true)
    .reduce((a, b) => a + b);

  const isAllLightsOn = !lights.find((light) => light.isOn === false);

  const isAllLightsOff = !lights.find((light) => light.isOn === true);

  const isDimmed = isAllLightsOff ? true : false;

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        lightedLights={lightedLights}
        isAllLightsOn={isAllLightsOn}
        isAllLightsOff={isAllLightsOff}
        handleTurnAllLightsOn={handleTurnAllLightsOn}
        handleTurnAllLightsOff={handleTurnAllLightsOff}
      />
    </Layout>
  );
}
