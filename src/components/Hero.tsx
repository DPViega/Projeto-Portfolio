import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Efeito de gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Círculos de luz neon */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />

      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-glass rounded-full border border-primary/30">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Disponível para projetos</span>
        </div>

        {/* Nome com efeito */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 font-display">
          <span className="text-gradient">Filipe Gabriel</span>
        </h1>

        {/* Título */}
        <p className="text-2xl md:text-3xl mb-6 text-muted-foreground font-light">
          Desenvolvedor e Criador de Projetos
        </p>

        {/* Descrição */}
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
          Transformando ideias em experiências digitais inovadoras através de código limpo e design futurista
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('projetos')}
            className="group"
          >
            Ver Projetos
            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button 
            variant="neon" 
            size="lg"
            onClick={() => scrollToSection('contato')}
          >
            Entrar em Contato
          </Button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;