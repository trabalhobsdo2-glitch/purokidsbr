import { Link } from "react-router-dom";
import { ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatBRL } from "../lib/format";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, totalAtual, totalAntigo } =
    useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-ink/40 z-50 transition-opacity ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl transition-transform flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b-4 border-dashed border-teal/30">
          <h2 className="font-display text-xl text-blue">Seu carrinho</h2>
          <button
            onClick={closeCart}
            aria-label="Fechar carrinho"
            className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-cream"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 && (
            <div className="text-center py-16 text-ink/60">
              <ShoppingBag size={48} className="mx-auto mb-3 text-ink/25" strokeWidth={1.5} />
              <p>Seu carrinho está vazio.</p>
            </div>
          )}

          {items.map((item) => (
            <div key={`${item.slug}-${item.tamanho}`} className="flex gap-3 items-center">
              <img
                src={item.imagem}
                alt={item.nome}
                className="h-20 w-20 rounded-xl object-cover border-2 border-cream shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">{item.nome}</p>
                <p className="text-sm text-ink/60">Tamanho: {item.tamanho}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    className="h-6 w-6 rounded-full bg-cream font-bold"
                    onClick={() => updateQuantity(item.slug, item.tamanho, item.quantidade - 1)}
                  >
                    −
                  </button>
                  <span className="w-5 text-center">{item.quantidade}</span>
                  <button
                    className="h-6 w-6 rounded-full bg-cream font-bold"
                    onClick={() => updateQuantity(item.slug, item.tamanho, item.quantidade + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-display text-pink">
                  {formatBRL(item.precoAtual * item.quantidade)}
                </p>
                <button
                  onClick={() => removeItem(item.slug, item.tamanho)}
                  className="text-xs text-ink/40 hover:text-pink underline mt-1"
                >
                  remover
                </button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t-4 border-dashed border-teal/30 space-y-3">
            <div className="flex justify-between text-sm text-ink/50">
              <span>Valor de tabela</span>
              <span className="line-through">{formatBRL(totalAntigo)}</span>
            </div>
            <div className="flex justify-between font-display text-lg">
              <span>Total</span>
              <span className="text-pink">{formatBRL(totalAtual)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="block text-center bg-pink hover:bg-pink-dark text-white font-display py-3 rounded-full shadow-md transition-colors"
            >
              Finalizar compra
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
