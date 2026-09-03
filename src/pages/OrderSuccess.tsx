import { Link } from "react-router-dom";
import { PartyPopper } from "lucide-react";

export default function OrderSuccess() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <PartyPopper size={56} className="mx-auto mb-4 text-pink" strokeWidth={1.5} />
      <h1 className="font-display text-3xl text-blue mb-3">Pedido confirmado!</h1>
      <p className="text-ink/60 mb-8">
        Recebemos seu pedido. Você vai receber a confirmação e o código de rastreio por
        e-mail assim que o pijama for despachado — em até 2 dias úteis.
      </p>
      <Link
        to="/"
        className="inline-block bg-pink hover:bg-pink-dark text-white font-display px-6 py-3 rounded-full shadow-lg transition-colors"
      >
        Voltar para a loja
      </Link>
    </div>
  );
}
