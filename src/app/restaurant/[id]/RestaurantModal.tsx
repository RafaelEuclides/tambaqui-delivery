'use client';

import { useCartStore } from "@/store/cartStore";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mockRestaurant = {
  name: "Peixe Mania",
  image: "https://th.bing.com/th/id/R.e26052bde2a1d4245704efef99f6f3a3?rik=fW8c9XDszT1cNw&pid=ImgRaw&r=0",
  description: "O melhor peixe da cidade.",
  menu: [
    { name: "Tambaqui", price: 24.9, description: "Kg" },
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-6"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-t-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6 relative">
            <div className="relative w-full h-40">
              <img
                src={mockRestaurant.image}
                alt={mockRestaurant.name}
                className="w-full h-full object-cover rounded-xl"
              />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 text-indigo-950 hover:text-black transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
              <h1 className="text-2xl font-bold text-indigo-950 mt-4">{mockRestaurant.name}</h1>
              <p className="text-gray-600 mt-1">{mockRestaurant.description}</p>

              <h2 className="text-xl font-semibold text-indigo-950 mt-6 mb-3">Cardápio</h2>
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
                      className="mt-2 text-sm text-indigo-950 hover:underline cursor-pointer"
                    >
                      Adicionar
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
