import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Portal Imobiliário Digital",
      category: "Web Development",
      description: "Plataforma completa para gestão de imóveis com sistema de busca avançada, integração com mapas e painel administrativo.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      year: "2024",
      image: "/assets/project-real-estate.jpg",
    },
    {
      title: "App de Monitoramento Agrícola",
      category: "Mobile Development",
      description: "Aplicativo mobile para monitoramento de plantações com IoT, previsão do tempo e relatórios analíticos em tempo real.",
      technologies: ["React Native", "Firebase", "IoT", "Charts"],
      year: "2024",
      image: "/assets/project-agriculture.jpg",
    },
    {
      title: "Sistema ERP Corporativo",
      category: "Enterprise Software",
      description: "Sistema completo de gestão empresarial com módulos financeiro, estoque, vendas e recursos humanos.",
      technologies: ["Angular", "Java", "Spring", "MySQL"],
      year: "2023",
      image: "/assets/project-erp.jpg",
    },
    {
      title: "E-commerce Sustentável",
      category: "E-commerce",
      description: "Loja virtual focada em produtos sustentáveis com sistema de rastreamento de pegada de carbono.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Vercel"],
      year: "2023",
      image: "/assets/project-ecommerce.jpg",
    },
    {
      title: "Dashboard Analytics",
      category: "Data Visualization",
      description: "Painel de visualização de dados em tempo real com gráficos interativos e relatórios personalizáveis.",
      technologies: ["Vue.js", "D3.js", "Python", "Redis"],
      year: "2024",
      image: "/assets/project-analytics.jpg",
    },
    {
      title: "Sistema de Gestão Ambiental",
      category: "Cloud Platform",
      description: "Plataforma cloud para monitoramento ambiental com alertas automáticos e análise de dados meteorológicos.",
      technologies: ["React", "AWS", "Lambda", "DynamoDB"],
      year: "2023",
      image: "/assets/project-environment.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Projetos</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes, transformando desafios em soluções
              inovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Tecnologias:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Code className="h-4 w-4 mr-2" />
                      Detalhes
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projetos Concluídos" },
              { number: "98%", label: "Satisfação dos Clientes" },
              { number: "50+", label: "Clientes Ativos" },
              { number: "10+", label: "Anos de Experiência" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
