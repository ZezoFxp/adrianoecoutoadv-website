import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern law office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
            Especialistas em
            <span className="block text-accent">Recuperação de Crédito</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-balance">
            Serviço inovador na área de cobrança e gestão de inadimplentes com excelência técnica e atendimento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 group"
            >
              Solicite seu Orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5521974452474", "_blank")}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
