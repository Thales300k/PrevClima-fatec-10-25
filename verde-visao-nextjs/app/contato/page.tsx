"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Paulista, 1000, São Paulo",
      subtitle: "Bela Vista, São Paulo - CEP 01310-100",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 3030-4000",
      subtitle: "(11) 98765-4321 (WhatsApp)",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@prevclima.com.br",
      subtitle: "suporte@prevclima.com.br",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Seg - Sex: 9h às 18h",
      subtitle: "Sábados e Domingos: Fechado",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para transformar suas ideias em soluções digitais inovadoras. Entre em contato conosco e
              descubra como podemos ajudar a impulsionar seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Envie sua <span className="text-primary">mensagem</span>
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome completo *
                  </label>
                  <Input
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
                  <Input
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                  <Input
                    type="tel"
                    placeholder="(XX) XXXXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-card border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mensagem *</label>
                  <Textarea
                    placeholder="Descreva seu projeto ou dúvida..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-card border-border"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-muted-foreground">* Campos obrigatórios</p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Informações de <span className="text-primary">Contato</span>
                </h2>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-sm text-foreground">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="mt-6 bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Mapa de localização</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira algumas das perguntas mais comuns sobre nossos serviços e processos de trabalho.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Quanto tempo leva para desenvolver um projeto?",
                a: "O tempo varia de acordo com a complexidade, mas projetos web simples levam de 4-6 semanas, enquanto sistemas mais complexos podem levar 3-6 meses.",
              },
              {
                q: "Vocês oferecem suporte após a entrega do projeto?",
                a: "Sim! Oferecemos garantia de 90 dias e planos de manutenção mensal para suporte contínuo.",
              },
              {
                q: "Como funciona o processo de orçamento?",
                a: "Primeiro fazemos uma reunião para entender suas necessidades, depois enviamos uma proposta detalhada em até 3 dias úteis.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-secondary border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
