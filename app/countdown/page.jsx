"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Helper function to calculate time difference in seconds
const calculateTimeDifference = (endTime) => {
  const now = new Date();
  const diffInMs = endTime - now;
  return Math.max(0, Math.floor(diffInMs / 1000)); // Convert ms to seconds, ensure non-negative
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null); // Set initial state to null
  const [initialized, setInitialized] = useState(false); // Track initialization

  useEffect(() => {
    const override = process.env.NEXT_PUBLIC_OVERRIDE === "true";
    let endTime;

    if (override) {
      // Get OVERRIDE_DATE_TIME in format "YYYY-MM-DD HH:MM"
      const overrideDateTime = process.env.NEXT_PUBLIC_OVERRIDE_DATETIME;
      endTime = new Date(overrideDateTime); // Set end time based on override

      // If override date and time is earlier than the current time, do nothing (or handle it as needed)
      // if (endTime <= new Date()) {
      //   console.error("Override time has already passed!");
      //   return;
      // }
    } else {
      // Set end time for 6 hours later
      endTime = new Date();
      endTime.setHours(
        endTime.getHours() + Number(process.env.NEXT_PUBLIC_DURATION)
      );
    }

    // Initialize timeLeft
    setTimeLeft(calculateTimeDifference(endTime));
    setInitialized(true); // Set initialized to true after initial calculation

    // Update time every second
    const intervalId = setInterval(() => {
      const newTimeLeft = calculateTimeDifference(endTime);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft <= 0) {
        clearInterval(intervalId); // Stop countdown when time is up
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Calculate hours, minutes, and seconds from timeLeft in seconds
  const hours = Math.floor((timeLeft || 0) / 3600);
  const minutes = Math.floor(((timeLeft || 0) % 3600) / 60);
  const seconds = (timeLeft || 0) % 60;

  // Show "Time is up ⏰" message only if initialized and timeLeft is 0
  if (timeLeft === 0 && initialized) {
    return (
      <div className="p-10 flex flex-col justify-center items-center h-screen">
        <Image
          width={300}
          height={300}
          src={"/xtreme logo.svg"}
          className="mb-20"
        />
        <h1 className="text-[64px] -mr-6 animate-pulse font-bold text-center">
          Time's up ⏱️
        </h1>
      </div>
    );
  }

  // Show nothing until the countdown is initialized
  if (!initialized) {
    return null;
  }

  return (
    <div className="p-10 flex flex-col justify-center items-center h-screen">
      <Image
        width={300}
        height={300}
        src={"/xtreme logo.svg"}
        className="mb-20"
      />
      <div className="grid grid-flow-col gap-10 text-center auto-cols-max text-white">
        <div className="flex flex-col text-[24px] uppercase">
          <span className="countdown font-mono text-[120px]">
            <span style={{ "--value": hours }}></span>
          </span>
          hrs
        </div>
        <div className="flex flex-col text-[24px] uppercase">
          <span className="countdown font-mono text-[120px]">
            <span style={{ "--value": minutes }}></span>
          </span>
          mins
        </div>
        <div className="flex flex-col text-[24px] uppercase">
          <span className="countdown font-mono text-[120px]">
            <span style={{ "--value": seconds }}></span>
          </span>
          secs
        </div>
      </div>
      <Link href="/start" className="h-20 w-full  absolute top-0"></Link>
      <Link href="/" className="h-20 w-full  absolute bottom-0"></Link>
    </div>
  );
}
