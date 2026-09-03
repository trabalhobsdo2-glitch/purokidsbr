import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatBRL } from "../lib/format";

export default function CheckoutPage() {
  const { items, totalAtual, totalAntigo, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<"dados" | "pix">("dados");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep("pix");
  };

  // TODO(Bruno): aqui entra a integração real do PIX (Mercado Pago / gateway).
  // Por enquanto este botão só confirma o pedido pra validar o fluxo da loja.
  const handleConfirm = () => {
    clearCart();
    navigate("/pedido-confirmado");
  };

  if (items.length === 0 && step === "dados") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <ShoppingCart size={48} className="mx-auto mb-4 text-ink/25" strokeWidth={1.5} />
        <h1 className="font-display text-2xl mb-2">Seu carrinho está vazio</h1>
        <Link to="/" className="text-pink underline font-semibold">
          Voltar para a loja
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
      <div>
        <div className="flex items-center gap-3 mb-6 text-sm font-semibold">
          <span className={step === "dados" ? "text-pink" : "text-teal"}>1. Seus dados</span>
          <span className="text-ink/30">→</span>
          <span className={step === "pix" ? "text-pink" : "text-ink/40"}>2. Pagamento PIX</span>
        </div>

        {step === "dados" && (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border-2 border-cream space-y-4">
            <h2 className="font-display text-xl text-blue mb-2">Dados de entrega</h2>
            <div>
              <label className="text-sm font-semibold block mb-1">Nome completo</label>
              <input
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border-2 border-cream rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue"
                placeholder="Nome de quem vai receber"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold block mb-1">E-mail</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-cream rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue"
                  placeholder="voce@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">WhatsApp</label>
                <input
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full border-2 border-cream rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-[1fr_2fr] gap-4">
              <div>
                <label className="text-sm font-semibold block mb-1">CEP</label>
                <input
                  required
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="w-full border-2 border-cream rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue"
                  placeholder="00000-000"
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">Endereço completo</label>
                <input
                  required
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  className="w-full border-2 border-cream rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue"
                  placeholder="Rua, número, bairro, cidade - UF"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-pink hover:bg-pink-dark text-white font-display text-lg py-3.5 rounded-full shadow-lg transition-colors mt-2"
            >
              Ir para o pagamento
            </button>
          </form>
        )}

        {step === "pix" && (
          <div className="bg-white rounded-2xl p-6 border-2 border-cream text-center">
            <h2 className="font-display text-xl text-blue mb-1">Pague com PIX</h2>
            <p className="text-ink/60 text-sm mb-5">
              Escaneie o QR Code no app do seu banco ou copie o código.
            </p>
            <div className="mx-auto h-56 w-56 rounded-2xl bg-cream border-2 border-dashed border-teal flex items-center justify-center text-ink/40 text-sm mb-5">
              QR Code PIX
              <br />
              (gerado no pagamento)
            </div>
            <p className="font-display text-2xl text-pink mb-1">{formatBRL(totalAtual)}</p>
            <p className="text-xs text-ink/50 mb-6">Aprovação automática em poucos segundos</p>
            <button
              onClick={handleConfirm}
              className="w-full bg-teal hover:bg-teal-dark text-white font-display text-lg py-3.5 rounded-full shadow-lg transition-colors"
            >
              Já paguei / confirmar pedido
            </button>
            <button
              onClick={() => setStep("dados")}
              className="w-full text-ink/50 text-sm mt-3 underline"
            >
              Voltar e revisar dados
            </button>
          </div>
        )}
      </div>

      <aside className="bg-cream rounded-2xl p-6 h-fit sticky top-24">
        <h2 className="font-display text-lg text-blue mb-4">Resumo do pedido</h2>
        <div className="space-y-3 mb-4">
          {items.map((item) => (
            <div key={`${item.slug}-${item.tamanho}`} className="flex gap-3 items-center">
              <img
                src={item.imagem}
                alt={item.nome}
                className="h-14 w-14 rounded-lg object-cover border-2 border-white"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{item.nome}</p>
                <p className="text-xs text-ink/50">
                  Tam. {item.tamanho} · Qtd. {item.quantidade}
                </p>
              </div>
              <p className="text-sm font-semibold shrink-0">
                {formatBRL(item.precoAtual * item.quantidade)}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t-2 border-dashed border-teal/30 pt-3 space-y-1.5">
          <div className="flex justify-between text-sm text-ink/50">
            <span>Valor de tabela</span>
            <span className="line-through">{formatBRL(totalAntigo)}</span>
          </div>
          <div className="flex justify-between text-sm text-ink/50">
            <span>Frete</span>
            <span className="text-teal font-semibold">Calculado no envio</span>
          </div>
          <div className="flex justify-between font-display text-xl pt-1">
            <span>Total</span>
            <span className="text-pink">{formatBRL(totalAtual)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
