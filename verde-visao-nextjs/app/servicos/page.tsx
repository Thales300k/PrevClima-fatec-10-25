import Link from "next/link";
import { Code, Smartphone, Cloud, Headphones, Palette, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const mainServices = [
    {
      icon: Code,
      title: "Desenvolvimento de Sites",
      description: "Criamos sites responsivos, otimizados e modernos adaptados às necessidades do seu negócio.",
      features: [
        "Design responsivo",
        "SEO otimizado",
        "Performance de alta velocidade",
        "Integração com sistemas",
        "Segurança avançada",
      ],
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento Mobile",
      description: "Desenvolvemos aplicativos nativos e híbridos robustos e escaláveis para iOS e Android.",
      features: [
        "Apps nativos e híbridos",
        "Interface intuitiva",
        "Sincronização em nuvem",
        "Notificações push",
        "Performance otimizada",
      ],
    },
    {
      icon: Cloud,
      title: "Desenvolvimento Cloud",
      description: "Criamos experiências incríveis que vão criar um laço forte entre sua empresa e seus clientes.",
      features: [
        "Arquitetura em nuvem",
        "Escalabilidade automática",
        "Backup e recuperação",
        "Monitoramento 24/7",
        "Segurança de dados",
      ],
    },
  ];

  const complementaryServices = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Criamos experiências de usuário intuitivas e visualmente impactantes que encantam e convertem.",
      features: ["Interface moderna", "Prototipagem", "Testes de usabilidade"],
    },
    {
      icon: Headphones,
      title: "Consultoria em TI",
      description: "Análise técnica e estratégica para otimizar sua infraestrutura e processos tecnológicos.",
      features: ["Análise de sistemas", "Otimização de processos", "Planejamento estratégico"],
    },
    {
      icon: BarChart,
      title: "Suporte Técnico",
      description: "Oferecemos suporte contínuo para garantir que seus sistemas funcionem sem interrupções.",
      features: ["Suporte 24/7", "Manutenção preventiva", "Correção de bugs"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Oferecemos soluções completas em desenvolvimento de software para impulsionar seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Soluções <span className="text-primary">Digitais</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Desenvolvemos soluções digitais personalizadas que transformam sua presença online e otimizam seus
              processos de negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serviços <span className="text-primary">Complementares</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Além dos nossos serviços principais, oferecemos soluções adicionais para garantir o sucesso completo
              do seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complementaryServices.map((service, index) => (
              <Card key={index} className="bg-secondary border-border hover:border-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-lg text-background/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo para discutir como podemos transformar suas ideias em realidade.
          </p>
          <Button size="lg" className="bg-background text-primary hover:bg-background/90" asChild>
            <Link href="/contato">Solicitar Orçamento</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
