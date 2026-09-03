import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "../data/products";

export interface CartItem {
  slug: string;
  nome: string;
  imagem: string;
  precoAtual: number;
  precoAntigo: number;
  tamanho: string;
  quantidade: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, tamanho: string, quantidade?: number) => void;
  removeItem: (slug: string, tamanho: string) => void;
  updateQuantity: (slug: string, tamanho: string, quantidade: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAtual: number;
  totalAntigo: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "puro-kids-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, tamanho: string, quantidade = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === product.slug && i.tamanho === tamanho);
      if (existing) {
        return prev.map((i) =>
          i.slug === product.slug && i.tamanho === tamanho
            ? { ...i, quantidade: i.quantidade + quantidade }
            : i
        );
      }
      return [
        ...prev,
        {
          slug: product.slug,
          nome: product.nome,
          imagem: product.imagens[0],
          precoAtual: product.precoAtual,
          precoAntigo: product.precoAntigo,
          tamanho,
          quantidade,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeItem = (slug: string, tamanho: string) => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.tamanho === tamanho)));
  };

  const updateQuantity = (slug: string, tamanho: string, quantidade: number) => {
    if (quantidade < 1) return;
    setItems((prev) =>
      prev.map((i) => (i.slug === slug && i.tamanho === tamanho ? { ...i, quantidade } : i))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(() => items.reduce((sum, i) => sum + i.quantidade, 0), [items]);
  const totalAtual = useMemo(
    () => items.reduce((sum, i) => sum + i.precoAtual * i.quantidade, 0),
    [items]
  );
  const totalAntigo = useMemo(
    () => items.reduce((sum, i) => sum + i.precoAntigo * i.quantidade, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalAtual,
        totalAntigo,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}
