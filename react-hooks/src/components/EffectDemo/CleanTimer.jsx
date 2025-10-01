import { useState, useEffect } from "react";

function CleanTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Starting timer...");
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup
    return () => {
      console.log("Cleaning up timer...");
      clearInterval(interval);
    };
  }, []); // setup once

  return <p>Seconds passed: {seconds}</p>;
}

export default CleanTimer;
