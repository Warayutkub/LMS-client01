"use client";
import { useEffect, useState } from "react";

const DateCompo = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!currentTime) return null;

  const formatted = currentTime.toLocaleString("th-TH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div>
      <p>เวลาขณะนี้ :</p>
      <p>{formatted}</p>
    </div>
  );
};

export default DateCompo;
