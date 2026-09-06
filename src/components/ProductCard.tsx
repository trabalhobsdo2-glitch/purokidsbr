import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import type { Product } from "../data/products";
import { formatBRL } from "../lib/format";

const accents = ["teal", "pink", "purple", "orange", "blue"] as const;

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const accent = accents[index % accents.length];
  const off = Math.round((1 - product.precoAtual / product.precoAntigo) * 100);

  return (
    <Link
      to={`/produto/${product.slug}`}
      className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border-4 border-transparent hover:border-[--accent]"
      style={{ ["--accent" as string]: `var(--color-${accent})` }}
    >
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
      <div className="px-4 pb-4">
        <span className="w-full flex items-center justify-center gap-2 font-display text-sm py-2.5 rounded-full bg-cream text-blue border-2 border-blue group-hover:bg-blue group-hover:text-white transition-colors">
          <ShoppingBag size={16} /> Comprar
        </span>
      </div>
    </Link>
  );
}
