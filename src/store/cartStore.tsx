import { create } from "zustand";

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.name === item.name);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.name === item.name ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        };
      }
      return { items: [...state.items, item] };
    }),
    removeFromCart: (name) =>
      set((state) => {
        const item = state.items.find((i) => i.name === name);
        if (!item) return state;
    
        if (item.quantity > 1) {
          return {
            items: state.items.map((i) =>
              i.name === name ? { ...i, quantity: i.quantity - 1 } : i
            ),
          };
        } else {
          return {
            items: state.items.filter((i) => i.name !== name),
          };
        }
      }),
  clearCart: () => set({ items: [] }),
}));