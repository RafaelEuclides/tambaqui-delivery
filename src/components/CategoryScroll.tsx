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
    <div className="select-none flex justify-center mt-4 px-10 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        <div className="flex space-x-4 py-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex text-indigo-950 flex-col items-center cursor-pointer hover:scale-[1.1] justify-center bg-gray-100 rounded-xl p-4 shadow-md w-24 shrink-0 snap-start"
            >
            <div className="text-2xl">{cat.icon}</div>
            <div className="text-sm text-center mt-2">{cat.name}</div>
          </div>
    ))}
  </div>
</div>
  );
}

