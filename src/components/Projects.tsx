import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const projectsData = [
	{
		id: 1,
		title: "Farmácia de Manipulação",
		description:
			"Um painel, (one page), para uma Farmácia de Manipulação, com os produtos, contatos e um chatbot! ",
		image: "/project1.jpg",
		tags: ["React", "Node.js", "HTML", "CSS", "Python", "JavaScript"],
		github: "https://github.com/DPViega/Life_Simple-Project",
		demo: "https://lifesimple.fwh.is/?i=3",
	},
	{
		id: 2,
		title: "Juntos Pela Fibromialgia",
		description:
			"Um protótipo, (até então), de um site para a conscientização da Fibromialgia, incluindo um vídeo e um chatbot! (A pedido de minha mãe, Priscila Veiga)",
		image: "/project2.jpg",
		tags: ["React", "CSS", "HTML", "JavaScript"],
		github: "https://github.com/DPViega/Projeto_Site--Juntos_pela_Fibromialgia",
		demo: "https://juntospelafibromialgia.vercel.app/",
	},,
];

const Projects = () => {
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);
	const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						projectsData.forEach((_, index) => {
							setTimeout(() => {
								setVisibleProjects((prev) => [...prev, index]);
							}, index * 200);
						});
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section id="projetos" ref={sectionRef} className="relative py-20 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Título */}
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
						<span className="text-gradient">Projetos</span>
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full" />
					<p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground px-4">
						Explore alguns dos meus trabalhos mais recentes
					</p>
				</div>

				{/* Grid de Projetos */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
					{projectsData.map((project, index) => (
						<div
							key={project.id}
							className={`group relative bg-glass rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-500 ${
								visibleProjects.includes(index)
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
							onMouseEnter={() => setHoveredProject(project.id)}
							onMouseLeave={() => setHoveredProject(null)}
							style={{
								transform:
									hoveredProject === project.id
										? "translateY(-10px)"
										: "translateY(0)",
							}}
						>
							{/* Imagem do Projeto */}
							<div className="relative h-48 bg-gradient-to-br from-primary/20 to-cyan-400/20 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="absolute inset-0 w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
								{/* Overlay de hover */}
								<div
									className={`absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 ${
										hoveredProject === project.id
											? "opacity-100"
											: "opacity-0"
									}`}
								>
									<Button
										variant="neon"
										size="sm"
										className="transform hover:scale-110 transition-transform"
										onClick={() =>
											window.open(project.github, "_blank")
										}
									>
										<Github className="w-4 h-4" />
									</Button>
									<Button
										variant="neon"
										size="sm"
										className="transform hover:scale-110 transition-transform"
										onClick={() =>
											window.open(project.demo, "_blank")
										}
									>
										<ExternalLink className="w-4 h-4" />
									</Button>
								</div>
							</div>

							{/* Conteúdo */}
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
									{project.title}
								</h3>
								<p className="text-muted-foreground mb-4 line-clamp-2">
									{project.description}
								</p>

								{/* Tags */}
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							{/* Efeito de brilho */}
							{hoveredProject === project.id && (
								<div className="absolute inset-0 pointer-events-none">
									<div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-primary to-transparent -skew-x-12 animate-shimmer" />
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;