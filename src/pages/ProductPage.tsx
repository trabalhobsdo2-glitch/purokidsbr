import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SearchX, Check, Droplets, CloudSun, Ban, Sparkles } from "lucide-react";
import { products, sizeTable, detailImages } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatBRL } from "../lib/format";
import ProductCard from "../components/ProductCard";

const tamanhos = sizeTable.map((r) => r.tamanho);

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState(0);
  const [tamanho, setTamanho] = useState<string | null>(null);
  const [error, setError] = useState(false);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <SearchX size={56} className="mx-auto mb-4 text-ink/30" strokeWidth={1.5} />
        <h1 className="font-display text-2xl mb-2">Produto não encontrado</h1>
        <Link to="/" className="text-pink underline">
          Voltar para a loja
        </Link>
      </div>
    );
  }

  const off = Math.round((1 - product.precoAtual / product.precoAntigo) * 100);
  const outros = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  const handleAdd = () => {
    if (!tamanho) {
      setError(true);
      return;
    }
    addItem(product, tamanho);
  };

  const handleBuyNow = () => {
    if (!tamanho) {
      setError(true);
      return;
    }
    addItem(product, tamanho);
    navigate("/checkout");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      <div className="text-sm text-ink/50 mb-5">
        <Link to="/" className="hover:text-pink">
          Início
        </Link>{" "}
        / <span className="text-ink/80">{product.nome}</span>
      </div>

      <div className="grid lg:grid-cols-[64px_1fr_400px] gap-4 lg:gap-8 items-start">
        {/* Miniaturas - coluna vertical no desktop */}
        <div className="hidden lg:flex flex-col gap-3 sticky top-24">
          {product.imagens.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImage(i)}
              className={`rounded-xl overflow-hidden border-2 transition-colors aspect-[3/4] w-16 ${
                activeImage === i ? "border-pink" : "border-cream"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Imagem principal */}
        <div>
          <div className="rounded-3xl overflow-hidden bg-white border-2 border-cream aspect-[3/4] max-h-[640px] mx-auto">
            <img
              src={product.imagens[activeImage]}
              alt={product.nome}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Miniaturas - faixa horizontal no mobile */}
          <div className="flex lg:hidden gap-3 mt-3 overflow-x-auto pb-1">
            {product.imagens.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`shrink-0 rounded-xl overflow-hidden border-2 transition-colors aspect-[3/4] w-16 ${
                  activeImage === i ? "border-pink" : "border-cream"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Painel de informações - fixo ao rolar no desktop */}
        <div className="lg:sticky lg:top-24">
          <h1 className="font-display text-2xl sm:text-3xl text-blue mb-1">{product.nome}</h1>
          <p className="text-ink/60 mb-4 text-sm">{product.resumo}</p>

          <div className="flex items-baseline gap-3 mb-1 flex-wrap">
            <span className="font-display text-3xl text-pink">
              {formatBRL(product.precoAtual)}
            </span>
            <span className="text-lg text-ink/40 line-through">
              {formatBRL(product.precoAntigo)}
            </span>
            <span className="bg-yellow text-ink text-xs font-bold px-2.5 py-1 rounded-full">
              -{off}%
            </span>
          </div>
          <p className="text-xs text-ink/50 mb-6">
            Preço exclusivo para pagamento via PIX · aprovação em segundos
          </p>

          <div className="mb-6">
            <p className="font-semibold mb-2 text-sm">
              TAMANHO {tamanho && <span className="text-pink">· {tamanho}</span>}
            </p>
            <div className="flex flex-wrap gap-2">
              {tamanhos.map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTamanho(t);
                    setError(false);
                  }}
                  className={`h-10 min-w-10 px-3 rounded-lg border-2 font-semibold text-sm transition-colors ${
                    tamanho === t
                      ? "bg-blue border-blue text-white"
                      : "border-cream bg-white text-ink hover:border-blue/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            {error && <p className="text-pink text-sm mt-2">Escolha um tamanho para continuar.</p>}
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <button
              onClick={handleBuyNow}
              className="bg-pink hover:bg-pink-dark text-white font-display text-lg py-3.5 rounded-full shadow-lg transition-colors"
            >
              Comprar agora
            </button>
            <button
              onClick={handleAdd}
              className="bg-white hover:bg-cream border-2 border-blue text-blue font-display text-lg py-3.5 rounded-full transition-colors"
            >
              Adicionar ao carrinho
            </button>
          </div>

          <details className="bg-white rounded-2xl border-2 border-cream mb-3" open>
            <summary className="font-display text-lg text-blue p-4 cursor-pointer select-none">
              Sobre este pijama
            </summary>
            <p className="text-ink/70 text-sm leading-relaxed px-4 pb-4">{product.descricao}</p>
          </details>

          <details className="bg-white rounded-2xl border-2 border-cream">
            <summary className="font-display text-lg text-blue p-4 cursor-pointer select-none">
              Especificações
            </summary>
            <ul className="space-y-1.5 px-4 pb-4">
              {product.especificacoes.map((e) => (
                <li key={e} className="flex gap-2 text-sm text-ink/70">
                  <Check size={16} className="text-teal shrink-0 mt-0.5" strokeWidth={2.5} />
                  {e}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>

      {/* Detalhes de fabricação */}
      <section className="mt-16">
        <h2 className="font-display text-2xl text-blue mb-6 text-center">Detalhes que fazem diferença</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { img: detailImages.zipper, label: "Zíper frontal infantil" },
            { img: detailImages.fabric, label: "Fleece premium antialérgico" },
            { img: detailImages.stitching, label: "Costura reforçada" },
            { img: detailImages.cuff, label: "Punhos elásticos" },
          ].map((d) => (
            <div key={d.label} className="text-center">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-cream mb-2">
                <img src={d.img} alt={d.label} className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-ink/70">{d.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guia de tamanhos */}
      <section className="mt-16">
        <h2 className="font-display text-2xl text-blue mb-2 text-center">Guia de tamanhos</h2>
        <p className="text-ink/60 text-center mb-6 max-w-xl mx-auto text-sm">
          Use altura e peso da criança como referência. Na dúvida entre dois tamanhos, escolha o
          maior: o pijama rende mais tempo.
        </p>
        <div className="overflow-x-auto bg-white rounded-2xl border-2 border-cream">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-cream text-ink/70">
                <th className="px-4 py-3">Idade</th>
                <th className="px-4 py-3">Tamanho</th>
                <th className="px-4 py-3">Altura média</th>
                <th className="px-4 py-3">Peso médio</th>
              </tr>
            </thead>
            <tbody>
              {sizeTable.map((row) => (
                <tr key={row.tamanho} className="border-t border-cream">
                  <td className="px-4 py-2.5">{row.idade}</td>
                  <td className="px-4 py-2.5 font-semibold text-blue">{row.tamanho}</td>
                  <td className="px-4 py-2.5">{row.altura}</td>
                  <td className="px-4 py-2.5">{row.peso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-ink/50 text-center mt-3 max-w-lg mx-auto">
          Dica: crianças mais altas ou estruturadas podem precisar de 1 tamanho acima da idade
          indicada. O pijama é folgado por design.
        </p>
      </section>

      {/* Como cuidar */}
      <section className="mt-16 bg-teal/10 rounded-3xl p-8">
        <h2 className="font-display text-2xl text-blue mb-6 text-center">Como cuidar</h2>
        <div className="grid sm:grid-cols-4 gap-6 text-center">
          {[
            { Icon: Droplets, title: "Lave na máquina", text: "Água fria, ciclo delicado, do avesso." },
            { Icon: CloudSun, title: "Seque à sombra", text: "Não use secadora: preserva a maciez do tecido." },
            { Icon: Ban, title: "Não passe a ferro", text: "O fleece dispensa ferro, mantém o aspecto novo." },
            { Icon: Sparkles, title: "Sem alvejante", text: "Para cores vivas durarem por muitas brincadeiras." },
          ].map((c) => (
            <div key={c.title}>
              <c.Icon size={30} className="mx-auto text-teal-dark" strokeWidth={1.6} />
              <p className="font-display mt-2 mb-1">{c.title}</p>
              <p className="text-xs text-ink/60">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outros produtos */}
      <section className="mt-16">
        <h2 className="font-display text-2xl text-blue mb-6 text-center">Você vai curtir também</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {outros.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
