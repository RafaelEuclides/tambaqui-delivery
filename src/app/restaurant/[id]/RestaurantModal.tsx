'use client';

import { useCartStore } from "@/store/cartStore";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const mockRestaurant = {
  name: "Peixe Mania",
  image: "https://th.bing.com/th/id/R.e26052bde2a1d4245704efef99f6f3a3?rik=fW8c9XDszT1cNw&pid=ImgRaw&r=0",
  description: "O melhor peixe da cidade.",
  menu: [
    { name: "Tambaqui", price: 24.9, description: "Kg"},
    { name: "Pirarucu", price: 12.0, description: "Kg" },
    { name: "Aruanã", price: 6.0, description: "Kg" }
  ]
};

interface RestaurantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RestaurantModal({ isOpen, onClose }: RestaurantModalProps) {
  const { addToCart } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      {/* Fundo escurecido com opacidade */}
      <motion.div
        className="fixed inset-0 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="fixed inset-0 flex justify-center items-center z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-4 right-4 text-indigo-950 hover:text-black"
          >
            <X />
          </button>

          {/* Conteúdo do restaurante */}
          <img src={mockRestaurant.image} alt={mockRestaurant.name} className="w-full h-40 object-cover rounded-xl" />
          <h1 className="text-indigo-950 text-2xl font-bold mt-4">{mockRestaurant.name}</h1>
          <p className="text-gray-500 mt-2">{mockRestaurant.description}</p>

          <h2 className="text-xl text-indigo-950 font-semibold mt-6 mb-2">Cardápio</h2>
          <ul className="space-y-4">
            {mockRestaurant.menu.map((item, idx) => (
              <li key={idx} className="border p-4 rounded-xl bg-white shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-indigo-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <span className="text-indigo-900 font-semibold">R$ {item.price.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => addToCart({ ...item, quantity: 1 })}
                  className="mt-2 text-sm text-indigo-950 cursor-pointer hover:underline"
                >
                  Adicionar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
}
