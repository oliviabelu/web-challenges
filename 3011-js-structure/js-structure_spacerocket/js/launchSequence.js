// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { NFSAT } from "./payload/satellites.js";
import { FISHSAT } from "./payload/satellites.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { rocket } from "./core/rocket.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

export default function launch() {
  //---Load Payload---
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  //---Fueling---
  fuel();

  //---Countdown---
  const requiredCountdown = rocket.requiredCountdown;
  for (let counter = 0; counter < requiredCountdown; counter++) {
    countdown();
  }

  //---Liftoff---
  liftoff();

  //---Deploy Payload---
  deployPayload();
}
