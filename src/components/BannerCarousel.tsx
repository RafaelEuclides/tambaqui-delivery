"use client";

import { useState, useEffect } from "react";

const banners = [
  "https://www.greenpeace.org/static/planet4-brasil-stateless/2023/05/dc92912a-2022-03-09-07.44.44-1.jpg",
  "https://ac24horas.com/wp-content/uploads/2022/04/FEIRA-DO-PEIXE-RIO-BRANCO-2.jpeg",
  "https://jbchost.com.br/ht/wp-content/uploads/2016/03/SantaFeira.21316-29.jpg"
];

export function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="select-none overflow-hidden shadow-md relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="select-none flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`banner-${index}`}
            className="w-full h-[400px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="select-none absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            } transition-colors`}
          />
        ))}
      </div>
    </div>
  );
}
