import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Guarantees from "../components/Guarantees";
import TrustBanner from "../components/TrustBanner";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-16">
          <div className="text-center mb-8">
            <span className="inline-block bg-yellow text-ink font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full whitespace-nowrap stitch-border border-ink/10">
              Há 8 anos vestindo crianças de um jeito divertido
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h1 className="font-display text-4xl sm:text-5xl leading-tight text-blue mb-4">
                Pijamas que <span className="text-pink">abraçam</span> sonhos
              </h1>
              <p className="text-ink/70 text-lg mb-6 max-w-md mx-auto md:mx-0">
                Kigurumis fofinhos em fleece antialérgico, com capuz 3D bordado. Do RN ao
                tamanho 12, prontos pra virar o personagem favorito na hora de dormir.
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <a
                  href="#produtos"
                  className="bg-pink hover:bg-pink-dark text-white font-display px-6 py-3 rounded-full shadow-lg transition-colors"
                >
                  Ver pijamas
                </a>
                <div>
                  <p className="font-display text-2xl text-pink leading-none">R$ 24,90</p>
                  <p className="text-xs text-ink/50">35% off, direto da fábrica</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/logo-hero.png"
                alt="Puro Kids"
                className="w-full max-w-sm mx-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustBanner />

      <section id="produtos" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="font-display text-purple text-sm tracking-wide uppercase mb-1">
            Coleção Puro Kids
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-blue">
            Escolha o personagem favorito
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <Guarantees />
    </div>
  );
}
