import { Navbar } from "@/components/NavBar";
import { BannerCarousel } from "@/components/BannerCarousel";
import { CategoryScroll } from "@/components/CategoryScroll";
import { RestaurantList } from "@/components/RestaurantList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <Navbar />
      <div className="mt-10">
        <BannerCarousel />
        <CategoryScroll />
        <RestaurantList />
      </div>
    </main>
  );
}
