import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

//const fetcher = (...args) => fetch(...args).then((res) => res.json());
const fetcher = async (URL) => {
  const result = await fetch(URL);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!result.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await result.json();
    error.status = result.status;
    throw error;
  }

  return result.json();
};

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const {
    data: coords,
    error,
    isLoading,
    mutate,
  } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  console.log(coords);

  if (error) {
    //console.log(error);
    return <h1>ERROR!</h1>;
  }

  if (isLoading) {
    return <h1>...loading</h1>;
  }

  // const { longitude, latitude } = data;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={mutate}
      />
    </main>
  );
}
