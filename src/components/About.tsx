import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";

const About = () => {
  return (
    <section id="escritorio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">O Escritório</h2>
              <div className="w-20 h-1 bg-accent" />
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              A sociedade de advogados surgiu do encontro de profissionais com vasta experiência na advocacia em âmbito nacional. Compromete-se a oferecer aos clientes alta qualidade técnica na solução de demandas, sempre atendendo de maneira exclusiva, organizada, transparente e ética.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground/80">
                  Escritório multidisciplinar com ênfase no Direito Empresarial e Civil
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground/80">
                  Destaque em Recuperação de Crédito com profissionais especializados
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                <p className="text-foreground/80">
                  Atuação em direito bancário, contratos, recuperação judicial e proteção patrimonial
                </p>
              </div>
            </div>

            <Button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5521974452474", "_blank")}
              className="bg-accent hover:bg-accent/90 mt-4"
              size="lg"
            >
              Fale Conosco
            </Button>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Modern office"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
