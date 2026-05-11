import { useState, useEffect } from "react";

export default function useMouse() {
  //   const [x, setX] = useState();
  //   const [y, setY] = useState();

  const [curserPosition, setCurserPosition] = useState([0, 0]);

  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      //   setX(event.clientX);
      //   setY(event.clientY);
      setCurserPosition([event.clientX, event.clientY]);
    });
  }, []);

  //   return [x, y];
  return curserPosition;
}
