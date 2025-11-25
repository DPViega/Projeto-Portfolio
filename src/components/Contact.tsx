import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Instagram, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio - aqui você integraria com EmailJS
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/wordloop15?igsh=MWo4djZkdHJyeTQ0ag%3D%3D&utm_source=qr", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/5551933808998", label: "WhatsApp" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/filipe-gabriel-veiga-de-paula-704b2a302/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/DPViega", label: "GitHub" },
  ];

  return (
    <section id="contato" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
            <span className="text-gradient">Vamos Conversar</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground px-4">
            Tem um projeto em mente? Entre em contato!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Formulário */}
          <div className="bg-glass p-4 sm:p-6 md:p-8 rounded-xl border border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-primary/30 focus:border-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-primary/30 focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-primary/30 focus:border-primary transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Enviando...</span>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            {/* Email direto */}
            <div className="bg-glass p-6 rounded-xl border border-primary/20 group hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email direto</p>
                  <a
                    href="mailto:viega.dev@yahoo.com"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    viega.dev@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="bg-glass p-6 rounded-xl border border-primary/20">
              <h3 className="text-lg font-semibold mb-4">Conecte-se comigo</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all group"
                    >
                      <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-primary/20 to-cyan-400/20 p-6 rounded-xl border border-primary/30">
              <h3 className="text-lg font-semibold mb-2">Pronto para começar?</h3>
              <p className="text-muted-foreground text-sm">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte de suas visões.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
