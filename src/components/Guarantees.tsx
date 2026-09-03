import { HeartHandshake, RefreshCcw, Lock, Truck, MessageCircle, PackageCheck } from "lucide-react";

const guarantees = [
  {
    icon: HeartHandshake,
    title: "Garantia de satisfação",
    text: "Não amou? Devolvemos seu dinheiro em até 7 dias após o recebimento. Sem perguntas.",
  },
  {
    icon: RefreshCcw,
    title: "Troca grátis em 30 dias",
    text: "Errou o tamanho ou o personagem? Trocamos sem custo de frete adicional.",
  },
  {
    icon: Lock,
    title: "Checkout 100% seguro",
    text: "Pagamento processado via Mercado Pago com criptografia SSL 256-bit.",
  },
  {
    icon: Truck,
    title: "Envio para todo Brasil",
    text: "Despachamos em até 2 dias úteis com rastreio via Mercado Envios.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento humano",
    text: "Resposta em até 24h úteis pelo WhatsApp e e-mail. Sem robôs.",
  },
  {
    icon: PackageCheck,
    title: "Estoque próprio",
    text: "Produtos conferidos peça por peça antes de embalar. Sem surpresas na entrega.",
  },
];

export default function Guarantees() {
  return (
    <section id="garantias" className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <p className="font-display text-pink text-sm tracking-wide uppercase mb-1">
          Compra protegida
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-blue">
          Sua compra com 6 garantias reais
        </h2>
        <p className="text-ink/60 mt-2 max-w-xl mx-auto">
          Trabalhamos para que seu único trabalho seja escolher o personagem favorito.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {guarantees.map((g) => (
          <div key={g.title} className="bg-white rounded-2xl p-5 shadow-sm border-2 border-cream">
            <g.icon size={28} className="text-teal" strokeWidth={1.8} />
            <h3 className="font-display text-lg mt-2 mb-1 text-ink">{g.title}</h3>
            <p className="text-sm text-ink/60">{g.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
