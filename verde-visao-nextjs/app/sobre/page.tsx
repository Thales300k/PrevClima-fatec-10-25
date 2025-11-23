import Image from "next/image";
import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Transformar a experiência imobiliária, fornecendo ferramentas que simplifiquem processos e otimizem a sustentabilidade no campo.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser a principal referência em soluções tecnológicas para o setor imobiliário e ambiental, promovendo inovação sustentável e acessível a todos.",
    },
    {
      icon: Award,
      title: "Valores",
      items: [
        "Excelência e qualidade",
        "Inovação e criatividade",
        "Transparência e ética",
        "Compromisso com resultados",
        "Sustentabilidade",
      ],
    },
  ];

  const team = [
    {
      name: "João Henrique",
      role: "CEO & Co-Fundador",
      description: "Com mais de 15 anos de experiência em desenvolvimento de software e gestão de equipes tecnológicas.",
      image: "/assets/team-joao.jpg",
      fallback: "JH",
    },
    {
      name: "Thales Mathey",
      role: "CTO & Co-Fundador",
      description: "Especialista em arquitetura de software e desenvolvimento de aplicações de alta performance.",
      image: "/assets/team-thales.jpg",
      fallback: "TM",
    },
    {
      name: "Marcos Gabriel",
      role: "Diretor de Projetos",
      description: "Desenvolve soluções criativas um foco em sistemas ágeis, garantindo entregas de alta qualidade no prazo.",
      image: "/assets/team-marcos.jpg",
      fallback: "MG",
    },
    {
      name: "Guilherme Paiva",
      role: "UX/UI Lead Designer",
      description: "Especialista em criar experiências de usuário intuitivas e interfaces visualmente impactantes.",
      image: "/assets/team-guilherme.jpg",
      fallback: "GP",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a <span className="text-primary">PrevClima</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Conheça nossa história, missão, valores e a equipe de profissionais apaixonados por tecnologia que
              impulsionam nosso sucesso.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Missão, Visão e <span className="text-primary">Valores</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  {value.description && (
                    <p className="text-muted-foreground">{value.description}</p>
                  )}
                  {value.items && (
                    <ul className="space-y-2 text-left">
                      {value.items.map((item, i) => (
                        <li key={i} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa <span className="text-primary">Equipe</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nosso maior ativo são as pessoas talentosas e dedicadas. Conheça alguns dos profissionais que tornam
              possível entregar soluções de excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-secondary border-border text-center">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xl">
                      {member.fallback}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
