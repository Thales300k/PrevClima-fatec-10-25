"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Smartphone, Cloud, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Home() {
  const heroImages = [
    "/assets/hero-climate.jpg",
    "/assets/hero-weather-1.jpg",
    "/assets/hero-weather-2.jpg",
    "/assets/hero-weather-3.jpg"
  ];

  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Criamos websites modernos e responsivos com as melhores tecnologias do mercado.",
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android com excelente performance.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infraestrutura escalável na nuvem com práticas modernas de DevOps.",
    },
    {
      icon: TrendingUp,
      title: "Consultoria",
      description: "Análise e otimização de processos para maximizar resultados do seu negócio.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full h-full"
          >
            <CarouselContent className="h-full">
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <Image 
                    src={image} 
                    alt={`Tecnologia climática ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Transformando Ideias em{" "}
              <span className="text-primary">Soluções Digitais</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Desenvolvemos software sob medida para impulsionar seu negócio com tecnologia de ponta e inovação constante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contato">
                  Fale com um Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projetos">Ver Projetos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para transformar suas ideias em realidade digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-secondary border-border hover:border-primary transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            Pronto para transformar suas ideias em realidade?
          </h2>
          <p className="text-lg text-background/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo para discutir seu projeto e descobrir como podemos ajudar a impulsionar seu negócio com soluções inovadoras.
          </p>
          <Button size="lg" className="bg-background text-primary hover:bg-background/90" asChild>
            <Link href="/contato">Fale com um Especialista</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
