const categories = [
  { name: "Peixaria", icon: "🐟" },
  { name: "Feira", icon: "🛒" },
  { name: "Japonesa", icon: "🍣" },
  { name: "Restaurante", icon: "🍽️" },
  { name: "Brasileira", icon: "🍛" },
  { name: "Pescados", icon: "🎣" },
];

export function CategoryScroll() {
  return (
    <div className="select-none flex justify-center mt-4 px-4 sm:px-6 md:px-10 overflow-x-auto scroll-smooth snap-x snap-mandatory">
      <div className="flex space-x-3 sm:space-x-4 py-2">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-3 sm:p-4 shadow-md w-20 sm:w-24 md:w-28 shrink-0 snap-start cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="text-xl sm:text-2xl md:text-3xl">{cat.icon}</div>
            <div className="text-xs sm:text-sm md:text-base text-center mt-2 text-indigo-950">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
