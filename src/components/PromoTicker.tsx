import { Star } from "lucide-react";

const items = [
  "OFERTA DA SEMANA · 35% OFF NA PRIMEIRA COMPRA",
  "ENVIO PARA TODO O BRASIL",
  "5X SEM JUROS NO CARTÃO",
  "TROCA GRÁTIS EM 30 DIAS",
];

export default function PromoTicker() {
  const track = [...items, ...items];

  return (
    <div className="bg-ink text-white overflow-hidden">
      <div className="flex whitespace-nowrap py-2 animate-[ticker_10s_linear_infinite]">
        {track.map((text, i) => (
          <span key={i} className="flex items-center text-xs font-bold tracking-wide px-6">
            {text}
            <Star size={12} className="mx-6 text-yellow fill-yellow" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
