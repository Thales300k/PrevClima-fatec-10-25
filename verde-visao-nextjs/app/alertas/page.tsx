import { TrendingUp, CheckCircle, Info, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Alerts() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Novo Serviço Lançado",
      date: "15 de Janeiro, 2025",
      description: "Agora oferecemos consultoria em Cloud Computing e DevOps para empresas que desejam modernizar sua infraestrutura.",
      type: "success",
    },
    {
      icon: CheckCircle,
      title: "Certificação AWS Obtida",
      date: "10 de Janeiro, 2025",
      description: "Nossa equipe obteve a certificação AWS Solutions Architect Professional, garantindo expertise em soluções cloud.",
      type: "success",
    },
    {
      icon: Info,
      title: "Webinar Gratuito",
      date: "20 de Janeiro, 2025",
      description: "Participe do nosso webinar sobre 'Tendências em Desenvolvimento Web para 2025'. Inscrições abertas!",
      type: "info",
    },
  ];

  const systemAlerts = [
    {
      title: "Manutenção Programada",
      description: "Nossos servidores passarão por manutenção no dia 25/01 das 02h às 04h.",
      type: "warning",
    },
    {
      title: "Novo Blog Post",
      description: "Confira nosso último artigo sobre 'Como escolher a tecnologia certa para seu projeto'.",
      type: "info",
    },
  ];

  const recentProjects = [
    {
      client: "TechStart Corp",
      project: "Sistema de Gestão Empresarial",
      status: "Concluído",
      date: "Janeiro 2025",
    },
    {
      client: "GreenFarm Agro",
      project: "App de Monitoramento IoT",
      status: "Em Andamento",
      date: "Janeiro 2025",
    },
    {
      client: "UrbanLiving Imóveis",
      project: "Portal Imobiliário",
      status: "Em Andamento",
      date: "Dezembro 2024",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Alertas e <span className="text-primary">Destaques</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Fique por dentro das últimas novidades, atualizações e conquistas da PrevClima.
            </p>
          </div>
        </div>
      </section>

      {/* System Alerts */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-4 max-w-4xl mx-auto">
            {systemAlerts.map((alert, index) => (
              <Alert
                key={index}
                className={
                  alert.type === "warning"
                    ? "border-warning bg-warning/5"
                    : "border-accent bg-accent/5"
                }
              >
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="text-foreground">{alert.title}</AlertTitle>
                <AlertDescription className="text-muted-foreground">{alert.description}</AlertDescription>
              </Alert>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Principais <span className="text-primary">Destaques</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira as últimas conquistas e novidades da nossa empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-secondary border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{highlight.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">{highlight.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projetos <span className="text-primary">Recentes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Acompanhe o progresso dos nossos projetos mais recentes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {recentProjects.map((project, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{project.project}</h3>
                      <p className="text-sm text-muted-foreground">Cliente: {project.client}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge
                        variant="outline"
                        className={
                          project.status === "Concluído"
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-accent bg-accent/10 text-accent"
                        }
                      >
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{project.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
