'use client';

import { useCartStore } from "@/app/store/cartStore";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface CartButtonWithModalProps {
  openCart: () => void; // Função para abrir o modal
}

export function CartButtonWithModal({ openCart }: CartButtonWithModalProps) {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button onClick={openCart} className="relative">
      <ShoppingCart className="w-6 h-6 text-white cursor-pointer" />
      {totalItems > 0 && (
        <motion.span
          key={totalItems}
          initial={{ scale: 0 }}
          animate={{ scale: [1.4, 0.9, 1.1, 1] }}
          transition={{ duration: 0.4 }}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
        >
          {totalItems}
        </motion.span>
      )}
    </button>
  );
}