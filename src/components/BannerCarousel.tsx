"use client";

import { useState } from "react";

const banners = [
  "https://th.bing.com/th/id/OIP.Nu_Uh4602CUzynYHS0U7ogHaEK?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/R.d09db5787014c7aafee801b6d4864b27?rik=c7e%2f6n9T1wR7dQ&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.HgPzTJV9zXnJNbK-MeFLfQHaE8?rs=1&pid=ImgDetMain"
];

export function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="overflow-hidden">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${current * 100}%)` }}>
        {banners.map((src, index) => (
          <img key={index} src={src} alt={`banner-${index}`} className="w-full object-cover h-100" />
        ))}
      </div>
    </div>
  );
}
