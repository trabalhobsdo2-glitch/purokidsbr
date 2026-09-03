import { ShieldCheck, Truck, Zap } from "lucide-react";

export default function TrustBanner() {
  return (
    <section className="bg-teal text-white">
      <div className="max-w-6xl mx-auto px-4 py-6 grid sm:grid-cols-3 gap-5 text-center sm:text-left">
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <ShieldCheck size={28} className="shrink-0" />
          <div>
            <p className="font-display leading-tight">Pagamento seguro</p>
            <p className="text-xs text-white/80">Processado via Mercado Pago</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <Truck size={28} className="shrink-0" />
          <div>
            <p className="font-display leading-tight">Envio para todo o Brasil</p>
            <p className="text-xs text-white/80">Rastreio via Mercado Envios</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <Zap size={28} className="shrink-0" />
          <div>
            <p className="font-display leading-tight">50% OFF no PIX</p>
            <p className="text-xs text-white/80">Aprovação em segundos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
