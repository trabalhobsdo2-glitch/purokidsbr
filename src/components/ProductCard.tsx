import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Check } from "lucide-react";
import type { Product } from "../data/products";
import { sizeTable } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatBRL } from "../lib/format";

const accents = ["teal", "pink", "purple", "orange", "blue"] as const;
const tamanhos = sizeTable.map((r) => r.tamanho);

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart();
  const accent = accents[index % accents.length];
  const off = Math.round((1 - product.precoAtual / product.precoAntigo) * 100);

  const [picking, setPicking] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPicking(true);
  };

  const handlePickSize = (e: React.MouseEvent, tamanho: string) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, tamanho);
    setPicking(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border-4 border-transparent hover:border-[--accent]"
      style={{ ["--accent" as string]: `var(--color-${accent})` }}
    >
      <Link to={`/produto/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream">
          <img
            src={product.imagens[0]}
            alt={product.nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span
            className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
            style={{ backgroundColor: `var(--color-${accent})` }}
          >
            -{off}% OFF
          </span>
        </div>
        <div className="p-4 pb-3">
          <h3 className="font-display text-base sm:text-lg text-ink truncate">{product.nome}</h3>
          <p className="text-sm text-ink/60 mb-2 line-clamp-2 min-h-[2.5rem]">{product.resumo}</p>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-display text-xl text-pink">{formatBRL(product.precoAtual)}</span>
            <span className="text-sm text-ink/40 line-through">{formatBRL(product.precoAntigo)}</span>
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        {!picking && (
          <button
            onClick={handleAddClick}
            className={`w-full flex items-center justify-center gap-2 font-display text-sm py-2.5 rounded-full transition-colors ${
              added
                ? "bg-teal text-white"
                : "bg-cream hover:bg-blue hover:text-white text-blue border-2 border-blue"
            }`}
          >
            {added ? (
              <>
                <Check size={16} /> Adicionado!
              </>
            ) : (
              <>
                <ShoppingBag size={16} /> Adicionar ao carrinho
              </>
            )}
          </button>
        )}

        {picking && (
          <div className="bg-cream rounded-2xl p-3" onClick={(e) => e.preventDefault()}>
            <p className="text-xs font-semibold text-ink/70 mb-2">Escolha o tamanho:</p>
            <div className="flex flex-wrap gap-1.5">
              {tamanhos.map((t) => (
                <button
                  key={t}
                  onClick={(e) => handlePickSize(e, t)}
                  className="h-8 min-w-8 px-2 rounded-lg bg-white border-2 border-blue/20 hover:border-blue hover:bg-blue hover:text-white text-xs font-semibold text-ink transition-colors"
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setPicking(false);
              }}
              className="text-xs text-ink/40 underline mt-2"
            >
              cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
