import { CreditCard, FileText, TrendingDown, Gavel, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    icon: CreditCard,
    title: "Recuperação de Crédito",
    description: "Estratégias eficazes para recuperação de valores com agilidade e segurança jurídica"
  },
  {
    icon: FileText,
    title: "Contratos",
    description: "Elaboração e análise de contratos empresariais e comerciais complexos"
  },
  {
    icon: TrendingDown,
    title: "Revisional de Juros",
    description: "Revisão de contratos bancários e financeiros com taxas abusivas"
  },
  {
    icon: Gavel,
    title: "Busca e Apreensão",
    description: "Ações judiciais de busca e apreensão com eficiência e celeridade"
  },
  {
    icon: ClipboardCheck,
    title: "Due Diligence Imobiliária",
    description: "Análise completa de riscos e oportunidades em transações imobiliárias"
  }
];

const PracticeAreas = () => {
  return (
    <section id="areas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Áreas de Atuação</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <area.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-primary">{area.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
