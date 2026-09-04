export default function Footer() {
  return (
    <footer className="bg-blue text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl mb-2">
            Puro <span className="text-yellow">Kids</span>
          </p>
          <p className="text-white/80 text-sm">
            Pijamas que abraçam sonhos. Pijamas fofos, macios e cheios de personalidade
            para a criançada dormir (e brincar) muito bem.
          </p>
        </div>
        <div>
          <p className="font-display text-lg mb-2 text-yellow">Atendimento</p>
          <ul className="text-white/80 text-sm space-y-1">
            <li>WhatsApp e e-mail · resposta em até 24h úteis</li>
            <li>Envio para todo o Brasil</li>
            <li>Despacho em até 2 dias úteis</li>
          </ul>
        </div>
        <div>
          <p className="font-display text-lg mb-2 text-yellow">Compra protegida</p>
          <ul className="text-white/80 text-sm space-y-1">
            <li>Garantia de satisfação · 7 dias</li>
            <li>Troca grátis em 30 dias</li>
            <li>Checkout 100% seguro (SSL 256-bit)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 text-center text-white/60 text-xs py-4 space-y-1">
        <p>© {new Date().getFullYear()} Puro Kids. Todos os direitos reservados.</p>
        <p>CNPJ 88.807.216/0001-04</p>
      </div>
    </footer>
  );
}
