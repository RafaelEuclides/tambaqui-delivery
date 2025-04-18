import { Navbar } from "@/components/NavBar";
import { BannerCarousel } from "@/components/BannerCarousel";
import { CategoryScroll } from "@/components/CategoryScroll";
import { RestaurantList } from "@/components/RestaurantList";

export default function Home() {
  return (
    <main className="select-none min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow mt-20 pb-24">
        <BannerCarousel />
        <CategoryScroll />
        <RestaurantList />
      </div>
      <footer className="bg-indigo-950 text-white text-center py-4">
        <p>© 2023 Tambaqui Delivery. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/rafael-euclides-martins-da-silva-b753261a5/"
            className="text-white underline italic"
          >
            Rafael Euclides
          </a>
        </p>
      </footer>
    </main>
  );
}
