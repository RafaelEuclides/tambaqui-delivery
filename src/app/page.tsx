'use client';

import { useState } from "react";
import { Navbar } from "@/components/NavBar";
import { BannerCarousel } from "@/components/BannerCarousel";
import { CategoryScroll } from "@/components/CategoryScroll";
import { RestaurantList } from "@/components/RestaurantList";
import { SearchBar } from "@/components/SearchBar";
import { CartModal } from "@/app/cart/CartModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    console.log("Busca:", query);
  };

  return (
    <>
        <Navbar openCart={() => setModalOpen(true)} />
        <CartModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <main className="select-none min-h-screen bg-gray-50">
        <div className="flex-grow mt-20 pb-24">
          <BannerCarousel />
          <SearchBar onSearch={handleSearch} />
          <CategoryScroll />
          <RestaurantList />
        </div>

        <footer className="bg-indigo-950 text-white text-center py-4">
          <p>© {new Date().getFullYear()} Tambaqui Delivery. Todos os direitos reservados.</p>
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
    </>
  );
}
