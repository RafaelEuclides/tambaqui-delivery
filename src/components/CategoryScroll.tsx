const categories = [
  { name: "Peixarias", image: "/images/seafood.png" },
  { name: "Feiras", image: "/images/fair.png" },
  { name: "Supermercados", image: "/images/supermarket.png" },
  { name: "Restaurantes", image: "/images/restaurant.png" },
  { name: "Bancas", image: "/images/market.png" },
];

export function CategoryScroll() {
  return (
    <div className="select-none overflow-x-auto whitespace-nowrap snap-x scroll-smooth touch-pan-x py-2 px-2 scrollbar-hide">
      <div className="inline-flex space-x-3 sm:space-x-4 sm:justify-center lg:justify-center w-full">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-100 rounded-xl shadow-md w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 p-2 shrink-0 snap-start cursor-pointer hover:scale-105 transition-transform"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-14 h-10 sm:w-16 sm:h-12 md:w-18 md:h-14 object-contain"
            />
            <div className="mt-1 text-xs sm:text-sm md:text-base text-center text-indigo-950">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}