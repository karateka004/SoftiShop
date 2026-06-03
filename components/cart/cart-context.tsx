"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Money, Product } from "@/lib/products";

export interface CartItem {
  id: string; // `${handle}:${size}`
  handle: string;
  title: string;
  price: Money;
  size: string;
  image: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: Money;
  addItem: (product: Product, size: string) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "softi-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Загрузка из localStorage (демо-персист)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, loaded]);

  const addItem = useCallback((product: Product, size: string) => {
    const id = `${product.handle}:${size}`;
    setItems((prev) => {
      const existing = prev.find((it) => it.id === id);
      if (existing) {
        return prev.map((it) =>
          it.id === id ? { ...it, qty: it.qty + 1 } : it,
        );
      }
      return [
        ...prev,
        {
          id,
          handle: product.handle,
          title: product.title,
          price: product.price,
          size,
          image: product.images[0]?.src ?? "",
          qty: 1,
        },
      ];
    });
  }, []);

  const removeItem = useCallback(
    (id: string) => setItems((prev) => prev.filter((it) => it.id !== id)),
    [],
  );

  const updateQty = useCallback(
    (id: string, qty: number) =>
      setItems((prev) =>
        qty <= 0
          ? prev.filter((it) => it.id !== id)
          : prev.map((it) => (it.id === id ? { ...it, qty } : it)),
      ),
    [],
  );

  const clear = useCallback(() => setItems([]), []);

  const count = items.reduce((sum, it) => sum + it.qty, 0);
  const subtotal: Money = {
    amount: items.reduce((sum, it) => sum + it.price.amount * it.qty, 0),
    currency: items[0]?.price.currency ?? "UAH",
  };

  return (
    <CartContext.Provider
      value={{ items, count, subtotal, addItem, removeItem, updateQty, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
