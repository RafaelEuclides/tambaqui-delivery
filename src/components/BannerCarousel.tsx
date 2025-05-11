"use client";

import { useState, useEffect } from "react";

const banners = [
  "https://www.greenpeace.org/static/planet4-brasil-stateless/2023/05/dc92912a-2022-03-09-07.44.44-1.jpg",
  "https://ac24horas.com/wp-content/uploads/2022/04/FEIRA-DO-PEIXE-RIO-BRANCO-2.jpeg",
  "https://www.riobranco.ac.gov.br/wp-content/uploads/2025/03/Ceasa-14-e1741897877530.jpeg"
];

export function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`banner-${index}`}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}