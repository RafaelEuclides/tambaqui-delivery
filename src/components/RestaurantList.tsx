import { RestaurantCard } from "./RestaurantCard";

const mockRestaurants = [
  {
    name: "Peixe mania",
    image: "https://th.bing.com/th/id/R.e26052bde2a1d4245704efef99f6f3a3?rik=fW8c9XDszT1cNw&pid=ImgRaw&r=0",
    rating: 4.7,
    category: "Restaurante",
    deliveryTime: "30-40 min",
  },
  {
    name: "Peixaria do Juvenal",
    image: "https://4.bp.blogspot.com/-tHmurGG8XPY/UuW5_cn6yNI/AAAAAAAAALw/TC__3hv1IPI/s1600/WP_20140119_033.jpg",
    rating: 4.5,
    category: "Banca",
    deliveryTime: "25-35 min",
  },
  {
    name: "Banca do Peixe",
    image: "https://peixariatatiana.com.br/assets/images/tilapia-peixaria-tatiana-2000x1333-63.jpg",
    rating: 4.8,
    category: "Feira",
    deliveryTime: "35-45 min",
  },
];

export function RestaurantList() {
  return (
    <section className="select-none px-4 mt-6 space-y-4">
      <h2 className="text-xl font-bold text-indigo-950">Peixarias</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {mockRestaurants.map((rest, idx) => (
          <RestaurantCard key={idx} {...rest} />
        ))}
      </div>
    </section>
  );
}
