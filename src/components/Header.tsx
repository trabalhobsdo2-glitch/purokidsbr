import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b-4 border-dashed border-teal/40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div>
            <p className="font-display text-2xl sm:text-3xl leading-none text-blue">
              Puro <span className="text-pink">Kids</span>
            </p>
            <p className="text-[11px] sm:text-xs text-ink/60 -mt-0.5">Pijamas que abraçam sonhos</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-semibold text-ink/80">
          <Link to="/" className="hover:text-pink transition-colors">
            Início
          </Link>
          <a href="/#produtos" className="hover:text-pink transition-colors">
            Produtos
          </a>
          <a href="/#garantias" className="hover:text-pink transition-colors">
            Garantias
          </a>
        </nav>

        <button
          onClick={openCart}
          className="relative flex items-center gap-2 bg-pink hover:bg-pink-dark text-white font-display px-4 py-2 rounded-full shadow-md transition-colors"
        >
          <ShoppingBag size={20} strokeWidth={2} />
          <span className="hidden sm:inline">Carrinho</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow text-ink text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center border-2 border-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
