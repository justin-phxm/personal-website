import Link from "next/link";
import { useState, useEffect } from "react";

interface TimerProps {
  shuffleArray: (array: number[][]) => void;
  myArray: number[][];
}
function formatTime(time: number) {
  const formattedTime = time.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  return formattedTime;
}
export default function Timer(props: TimerProps) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [intervalId, setIntervalId] = useState<undefined | NodeJS.Timeout>(
    undefined,
  );

  useEffect(() => {
    clearInterval(intervalId); // Clear the previous interval

    const newIntervalId = setInterval(() => {
      setSeconds((prevTime) => prevTime + 1);
    }, 1000);

    setIntervalId(newIntervalId); // Store the new interval ID
    return () => {
      clearInterval(newIntervalId); // Clear the interval on unmount
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (minutes === 59) {
      clearInterval(intervalId);
    }
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    }
  }, [intervalId, minutes, seconds]);
  function resetTime() {
    clearInterval(intervalId); // Clear the current interval
    setSeconds(0);
    setMinutes(0);
    const newIntervalId = setInterval(() => {
      setSeconds((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(newIntervalId); // Store the new interval ID
    props.shuffleArray(props.myArray);
  }
  return (
    <>
      <div className="grid w-40 grid-cols-2 items-center justify-around rounded-lg border border-white p-2">
        <div className="text-center">time</div>
        <div className="flex h-8 w-12 items-center justify-center whitespace-nowrap rounded-lg border border-white">
          {formatTime(minutes)}: {formatTime(seconds)}
        </div>
      </div>
      <div className="flex w-40 flex-row gap-2">
        <button
          onClick={resetTime}
          className="text-nowrap rounded-md bg-orange-300 p-2 text-black outline-none ring-white transition-opacity hover:opacity-80 focus:ring-2"
        >
          restart-game
        </button>
        <Link
          className="flex flex-1 items-center justify-center rounded-lg border border-white p-2"
          href={"/about-me"}
        >
          skip
        </Link>
      </div>
    </>
  );
}
