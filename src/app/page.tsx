'use client';

import { useState } from "react";
import { Navbar } from "@/components/NavBar";
import { BannerCarousel } from "@/components/BannerCarousel";
import { CategoryScroll } from "@/components/CategoryScroll";
import { SettlementList } from "@/components/SettlementList";
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

      <main className="select-none bg-gray-50 pt-20 min-h-screen w-full">
        <section className="w-full">
          <BannerCarousel />
        </section>

        <section className="w-full px-4 mt-4">
          <SearchBar onSearch={handleSearch} />
        </section>

        <section className="w-full px-4 mt-2">
          <CategoryScroll />
        </section>

        <section className="w-full px-4 mt-6 pb-10">
          <SettlementList />
        </section>

        <footer className="bg-indigo-950 text-white text-center py-6 mt-10 w-full">
          <p>© {new Date().getFullYear()} Tambaqui Delivery. Todos os direitos reservados.</p>
          <p className="mt-1">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/rafael-euclides-martins-da-silva-b753261a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline italic"
            >
              Rafael Euclides
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}