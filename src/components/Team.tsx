import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Rodolfo Couto",
    role: "Sócio",
  },
  {
    name: "Débora Adriano",
    role: "Sócia",
  }
];

const Team = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Sócios</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-32 h-32 bg-accent/10 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-5xl font-bold text-accent">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-accent font-medium">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
