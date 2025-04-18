type RestaurantCardProps = {
    name: string;
    image: string;
    rating: number;
    category: string;
    deliveryTime: string;
  };
  
  export function RestaurantCard({
    name,
    image,
    rating,
    category,
    deliveryTime,
  }: RestaurantCardProps) {
    return (
      <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-[1.02] duration-200 cursor-pointer">
        <img src={image} alt={name} className="w-full h-36 object-cover" />
        <div className="p-4">
          <h2 className="font-semibold text-lg text-indigo-950">{name}</h2>
          <p className="text-sm text-gray-500">
            ⭐ {rating} • {category} • {deliveryTime}
          </p>
        </div>
      </div>
    );
  }
  