import React from "react";
import { WorkItem } from "./work"; // Import the WorkItem component
import { useParams } from "react-router-dom"; // or next/navigation if using Next.js

const WorksPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  // You would typically fetch these from an API or context
  const allProjects: any = [
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
    },
    {
      id: 2,
      title: "Micro-service Ecommerce",
      description:
        "Scalable e-commerce platform with microservices architecture",
      technologies: ["Docker", "Kubernetes", "Express.js", "MongoDB"],
      imageUrl:
        "https://via.placeholder.com/800x400?text=Micro-service+Ecommerce",
      githubUrl: "https://github.com/yourusername/micro-ecommerce",
      liveUrl: "https://micro-ecommerce-demo.com",
      contributions: "Architected microservices structure",
      category: "software",
    },
    {
      id: 3,
      title: "Portfolio Design System",
      description: "Custom design system for creative portfolios",
      technologies: ["Figma", "Storybook", "React", "Tailwind CSS"],
      imageUrl: "https://via.placeholder.com/800x400?text=Design+System",
      githubUrl: "https://github.com/yourusername/design-system",
      contributions: "Created design tokens and components",
      category: "design",
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
    },
  ];
  // Filter projects if category is specified
  const filteredProjects = category
    ? allProjects.filter((project:any) =>
        category === "all" ? true : project.category === category
      )
    : allProjects;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12">
          {category
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Projects`
            : "All Projects"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project:any) => (
            <WorkItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
