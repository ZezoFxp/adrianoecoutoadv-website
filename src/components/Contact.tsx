import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Tire Suas Dúvidas</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Entre em contato conosco e receba atendimento personalizado
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-background rounded-xl">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                  <p className="text-foreground/70">
                    Avenida Abelardo Bueno nº 1, sala 308 C<br />
                    Bloco Ayrton Senna II, Edifício Dimension<br />
                    Barra da Tijuca - Rio de Janeiro, RJ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-xl">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a
                    href="mailto:contato@adrianoecoutoadv.com"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    contato@adrianoecoutoadv.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-xl shadow-lg">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone ou WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Deixe sua mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 h-12 text-lg group"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
