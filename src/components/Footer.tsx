const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Adriano & Couto</h3>
            <p className="text-white/80">
              Advocacia especializada em recuperação de crédito e direito empresarial
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-white/80 mb-2">
              contato@adrianoecoutoadv.com
            </p>
            <p className="text-white/80">
              (21) 97445-2474
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Endereço</h4>
            <p className="text-white/80">
              Av. Abelardo Bueno, 1 - Sala 308 C<br />
              Barra da Tijuca<br />
              Rio de Janeiro - RJ
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Adriano & Couto Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
