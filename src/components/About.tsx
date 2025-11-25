import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DiCss3 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { ChartAreaIcon, BotIcon } from "lucide-react";
import { DiPostgresql } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiGit } from "react-icons/di";

const skills = [
  { name: "JavaScript", icon: DiJavascript1, level: 20 },
  { name: "HTML", icon: DiHtml5, level: 40 },
  { name: "SQL", icon: DiPostgresql, level: 35 },
  { name: "Power BI", icon: ChartAreaIcon, level: 65 },
  { name: "Prompt Engineering", icon: BotIcon, level: 80 },
  { name: "Python", icon: DiPython, level: 50 },
  { name: "React", icon: DiReact, level: 25 },
  { name: "CSS", icon: DiCss3, level: 25 },
  { name: "Node.js", icon: DiNodejsSmall, level: 30 },
  { name: "Git", icon: DiGit, level: 15 },
  { name: "GitHub", icon: DiGithubBadge, level: 25},

];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gradient">Sobre Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Imagem */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-cyan-400 p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <Avatar className="w-full h-full rounded-full">
                      <AvatarImage src="/Profile.jpeg" alt="Filipe Gabriel" />
                      <AvatarFallback>FG</AvatarFallback>
                    </Avatar>
                  </div>
              </div>
              {/* Órbitas ao redor do avatar */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-4"></div>
              </div>
              <div className="absolute inset-0 animate-spin-reverse-slow">
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 translate-y-4"></div>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className={`space-y-4 sm:space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor apaixonado por criar experiências digitais únicas e inovadoras. 
              Com expertise em desenvolvimento web moderno, combino criatividade e tecnologia para 
              transformar ideias em realidade.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Meu foco está em construir aplicações performáticas, acessíveis e visualmente impressionantes, 
              sempre buscando as melhores práticas e tecnologias mais recentes do mercado.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`bg-glass p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-neon group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:animate-pulse" />
                <p className="text-sm text-center font-medium">{skill.name}</p>
                <div className="mt-2 h-1 bg-background rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-1000"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${600 + index * 100}ms`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;