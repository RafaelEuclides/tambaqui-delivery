'use client';

import Image from "next/image";
import { CartButtonWithModal } from "@/components/CartButtonWithModal";

interface NavbarProps {
  openCart: () => void; // Função para abrir o modal
}

export function Navbar({ openCart }: NavbarProps) {
  return (
    <header className="select-none h-20 fixed top-0 left-0 right-0 z-50 bg-indigo-950 shadow-md p-4 md:px-20 flex justify-between items-center">
      <div className="flex bg-indigo-950 rounded-full cursor-pointer items-center">
        <Image
          src="/logo3.png"
          alt="Logo"
          width={120}
          height={100}
          className="mt-12 object-contain"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          className="text-white cursor-pointer px-6 py-2 border border-black rounded-md hover:bg-white hover:text-indigo-950 transition duration-200 text-md md:text-md"
        >
          Registar/Entrar 👤
        </button>
        <CartButtonWithModal openCart={openCart} />
      </div>
    </header>
  );
}