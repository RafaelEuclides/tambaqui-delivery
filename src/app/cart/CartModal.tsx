'use client';

import { useCartStore } from "@/app/store/cartStore";
import { X } from "lucide-react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, removeFromCart, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null; // Não renderiza o modal se isOpen for false

  return (
    <>
      {/* Fundo escurecido para a página */}
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative z-50">
          {/* Botão para fechar o modal */}
          <button onClick={onClose} className="cursor-pointer absolute top-4 right-4 text-indigo-950 hover:text-black">
            <X />
          </button>
          
          <h2 className="text-xl text-indigo-950 font-bold mb-4">Seu Carrinho</h2>
          
          {items.length === 0 ? (
            <p className="text-indigo-950">Seu carrinho está vazio.</p>
          ) : (
            <>
              {/* Exibe os itens do carrinho */}
              {items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b py-3">
                  <div>
                    <p className="font-medium text-indigo-950">{item.name}</p>
                    <p className="text-sm text-gray-500">Qtd: {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-indigo-900">R$ {(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.name)} className="text-red-500 text-sm cursor-pointer">
                      ✖
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Exibe o total */}
              <div className="mt-6 flex text-indigo-700 justify-between text-lg font-bold">
                <span>Total:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>

              {/* Botão para finalizar a compra */}
              <button
                onClick={() => { clearCart(); onClose(); }}
                className="cursor-pointer mt-6 w-full bg-indigo-950 text-white py-3 rounded-xl font-semibold hover:bg-indigo-900 transition"
              >
                Finalizar Pedido
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
