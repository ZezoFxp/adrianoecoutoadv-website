import { Instagram, Linkedin } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Acompanhe o Escritório
          </h2>
          <p className="text-foreground/70">Fique por dentro das novidades e conteúdos jurídicos</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 max-w-3xl mx-auto">
          <a
            href="https://www.instagram.com/adrianoecoutoadvogados/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-muted/50 transition-all duration-300 animate-fade-in"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Instagram className="text-accent" size={32} />
            </div>
            <span className="font-medium text-foreground/80 group-hover:text-foreground">Instagram</span>
          </a>

          <a
            href="https://br.linkedin.com/company/adrianoecoutoadv"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-muted/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Linkedin className="text-accent" size={32} />
            </div>
            <span className="font-medium text-foreground/80 group-hover:text-foreground">LinkedIn</span>
          </a>

          <a
            href="https://www.reclameaqui.com.br/empresa/adriano-e-couto-advogados-associados/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-muted/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <span className="text-2xl font-bold text-accent">RA</span>
            </div>
            <span className="font-medium text-foreground/80 group-hover:text-foreground">Reclame Aqui</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
