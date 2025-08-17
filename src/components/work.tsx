import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, GitCommit, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface WorkItemProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  contributions?: string;
  category: "software" | "ai-ml" | "design" | "all";
  projectType?: "frontend" | "backend";
}

export const WorkItem: React.FC<WorkItemProps> = ({
  // id,
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  contributions,
  // projectType = "frontend",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Fallback background for backend projects without images
  const fallbackImage =
    "https://via.placeholder.com/800x400/1a202c/ffffff?text=" +
    encodeURIComponent(title + " (Backend)");

  // Truncate description for non-hovered state
  const truncatedDescription =
    description.length > 50 ? description.slice(0, 50) + "..." : description;

  return (
    <motion.div
      className="relative mb-12 overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg border border-gray-700/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image or Fallback */}
      <motion.div
        className="w-full h-72 relative"
        initial={{ scale: 1.1 }}
        animate={{ scale: isHovered ? 1.15 : 1.1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img
          src={imageUrl || fallbackImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Backend Badge
        {projectType === 'backend' && (
          <div className="absolute top-5 right-10 bg-gray-900/80 px-3 py-1 rounded-full text-xs text-gray-300 font-medium">
            Backend
          </div>
        )} */}
        {/* Persistent Title and Description Overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-xs text-gray-300">{truncatedDescription}</p>
        </motion.div>
      </motion.div>

      {/* Full Overlay with Details on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col justify-end p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/20 text-purple-200 border border-purple-500/30 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {contributions && (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-gray-100 mb-2 tracking-wide">
              Key Contributions:
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              {contributions}
            </p>
          </div>
        )}
        <div className="flex gap-6">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-purple-300 transition-colors duration-300"
            >
              <Github size={18} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={`${githubUrl}/commits/main`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-purple-300 transition-colors duration-300"
            >
              <GitCommit size={18} />
              <span className="text-sm font-medium">Commits</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-purple-300 transition-colors duration-300"
            >
              <ExternalLink size={18} />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const WorkSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "software" | "ai-ml" | "design"
  >("all");
  const navigate = useNavigate();

  // Sample projects data
  const projects: WorkItemProps[] = [
    {
      id: 1,
      title: "Sketch Sense",
      description:
        "AI-powered tool that transforms sketches into detailed artwork",
      technologies: ["React", "TensorFlow", "Canvas API", "Node.js"],
      imageUrl: "https://via.placeholder.com/800x400?text=Sketch+Sense",
      githubUrl: "https://github.com/yourusername/sketch-sense",
      liveUrl: "https://sketch-sense-demo.com",
      contributions: "Developed core AI model and frontend tools",
      category: "ai-ml",
      projectType: "frontend",
    },
    {
      id: 2,
      title: "Micro-service Ecommerce",
      description:
        "Scalable e-commerce platform with microservices architecture",
      technologies: ["Docker", "Kubernetes", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/yourusername/micro-ecommerce",
      liveUrl: "https://micro-ecommerce-demo.com",
      contributions: "Architected microservices structure",
      category: "software",
      projectType: "backend",
    },
    {
      id: 3,
      title: "Portfolio Design System",
      description: "Custom design system for creative portfolios",
      technologies: ["Figma", "Storybook", "React", "Tailwind CSS"],
      imageUrl: "https://via.placeholder.com/800x400?text=Design+System",
      githubUrl: "https://github.com/yourusername/design-system",
      contributions: "Created design tokens and components",
      category: "ai-ml",
      projectType: "frontend",
    },
    {
      id: 4,
      title: "Predictive Analytics Dashboard",
      description: "Dashboard for visualizing predictive models",
      technologies: ["Python", "D3.js", "Flask", "Pandas"],
      imageUrl: "https://via.placeholder.com/800x400?text=Predictive+Analytics",
      githubUrl: "https://github.com/yourusername/predictive-dashboard",
      contributions: "Built visualization components",
      category: "ai-ml",
      projectType: "frontend",
    },
  ];

  // Filter projects by category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Get top 2 projects for the current category
  const displayedProjects = filteredProjects.slice(0, 2);

  return (
    <section
      className="text-white py-20 w-[95vw] sm:w-[90vw] lg:w-[85vw] mx-auto min-h-screen lg:min-h-[calc(100vh)]"
      id="work"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 md:mb-0 text-white">
            ./Work
          </h2>

          {/* Category Filter */}
          <div className="flex gap-3 flex-wrap">
            {["all", "software", "ai-ml", "design"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as any)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-200 hover:bg-gray-700/50 border border-gray-600/50"
                }`}
              >
                {category === "ai-ml"
                  ? "AI/ML"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Work Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {displayedProjects.map((project) => (
            <WorkItem key={project.id} {...project} />
          ))}
        </div>

        {/* Explore More Button */}
        {filteredProjects.length > 2 && (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => navigate("/works")}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore{" "}
              {activeCategory === "all"
                ? "All Projects"
                : `${activeCategory.toUpperCase()} Projects`}
              <ArrowRight size={22} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
