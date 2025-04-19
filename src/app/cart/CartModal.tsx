'use client';

import { useCartStore } from "@/store/cartStore";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clear } from "console";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, removeFromCart, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center p-4 sm:p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto p-5 sm:p-6 relative">
              <button
                onClick={onClose}
                className="cursor-pointer absolute top-4 right-4 text-indigo-950 hover:text-black"
              >
                <X />
              </button>

              <h2 className="text-lg sm:text-xl text-indigo-950 font-bold mb-4">
                Seu Carrinho
              </h2>

              {items.length === 0 ? (
                <p className="text-indigo-950">Seu carrinho está vazio.</p>
              ) : (
                <>
                  <div className="space-y-4">
                    {items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center border-b pb-2"
                      >
                        <div>
                          <p className="font-medium text-indigo-950">{item.name}</p>
                          <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-indigo-900 text-sm sm:text-base">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => clearCart()}
                            className="text-red-500 text-sm cursor-pointer"
                          >
                            ✖
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between text-indigo-700 text-base sm:text-lg font-bold">
                    <span>Total:</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={() => {
                      clearCart();
                      onClose();
                    }}
                    className="cursor-pointer mt-6 w-full bg-indigo-950 text-white py-3 rounded-xl font-semibold hover:bg-indigo-900 transition"
                  >
                    Finalizar Pedido
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}