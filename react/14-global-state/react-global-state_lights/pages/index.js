import Link from "../components/Link";

export default function HomePage({
  lights,
  toggleLight,
  lightedLights,
  isAllLightsOn,
  isAllLightsOff,
  handleTurnAllLightsOff,
  handleTurnAllLightsOn,
}) {
  return (
    <div>
      <h1>Home</h1>
      <p>
        {lightedLights === 1
          ? `${lightedLights} light is`
          : `${lightedLights} lights are`}{" "}
        on.
      </p>
      <p>
        <Link href="/rooms" rooms={lights} toggleLight={toggleLight}>
          All Rooms →
        </Link>
      </p>
      <p>
        <Link
          href="/actions"
          isAllLightsOn={isAllLightsOn}
          isAllLightsOff={isAllLightsOff}
          handleTurnAllLightsOn={handleTurnAllLightsOn}
          handleTurnAllLightsOff={handleTurnAllLightsOff}
        >
          Quick Actions →
        </Link>
      </p>
    </div>
  );
}
