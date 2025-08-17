import React from "react";
import { motion } from "framer-motion";
import capLogo from "../assets/images/capgeminiLogo.svg";
// import infoLogo from "../assets/images/infowareLogo.png";

interface ExperienceItemProps {
  logo?: string; // Optional logo
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies?: string[]; // Optional array of technologies used
  domains?: string[]; // Optional array of domains
}

const LocationIcon: React.FC = () => (
  <svg
    className="w-4 h-4 mr-1"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  logo,
  company,
  role,
  period,
  location,
  description,
  technologies = [],
  domains = [],
}) => {
  // Set a maximum number of visible items (adjust as needed)
  const maxVisibleTechnologiesItems = 7;
  const maxVisibleDomainsItems = 3;

  // Calculate visible and hidden items
  const visibleTechnologies = technologies.slice(
    0,
    maxVisibleTechnologiesItems
  );
  const hiddenTechnologies = technologies.slice(maxVisibleTechnologiesItems);
  const visibleDomains = domains.slice(0, maxVisibleDomainsItems);
  const hiddenDomains = domains.slice(maxVisibleDomainsItems);

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-[35%,65%] lg:grid-cols-[30%,70%] items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-start">
        {logo ? (
          <motion.img
            src={logo}
            alt={`${company} logo`}
            className="w-[45%] sm:w-[40%] md:w-[60%] lg:w-[55%] mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ) : (
          <div className="font-bold text-2xl sm:text-3xl text-green-400 mb-4">
            {company}
          </div>
        )}
        <div className="grid grid-cols-1 items-start gap-2 text-left">
          <h4 className="text-base sm:text-lg text-gray-300">{role}</h4>
          <div className="text-sm sm:text-base text-gray-400">{period}</div>
          <div className="text-sm sm:text-base text-gray-400 flex items-center">
            <LocationIcon /> {location}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <motion.p
          className="text-sm sm:text-base text-gray-300 text-justify leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {description}
        </motion.p>
        {(technologies.length > 0 || domains.length > 0) && (
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            {technologies.length > 0 && (
              <div className="flex-1 min-w-[150px]">
                <h5 className="text-sm font-semibold text-gray-100 mb-2">
                  Technologies Used:
                </h5>
                <ul className="flex flex-wrap gap-2">
                  {visibleTechnologies.map((tech, index) => (
                    <li
                      key={index}
                      className="text-xs sm:text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                  {hiddenTechnologies.length > 0 && (
                    <li className="relative text-xs sm:text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full group">
                      +{hiddenTechnologies.length}
                      <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-800 text-gray-200 text-xs rounded-lg p-2 w-48 z-10 whitespace-normal">
                        {hiddenTechnologies.join(", ")}
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            )}
            {domains.length > 0 && (
              <div className="flex-1 min-w-[150px]">
                <h5 className="text-sm font-semibold text-gray-100 mb-2">
                  Domains:
                </h5>
                <ul className="flex flex-wrap gap-2">
                  {visibleDomains.map((domain, index) => (
                    <li
                      key={index}
                      className="text-xs sm:text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {domain}
                    </li>
                  ))}
                  {hiddenDomains.length > 0 && (
                    <li className="relative text-xs sm:text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-full group">
                      +{hiddenDomains.length}
                      <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-800 text-gray-200 text-xs rounded-lg p-2 w-48 z-10 whitespace-normal">
                        {hiddenDomains.join(", ")}
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section
      className="text-white py-12 sm:py-16 w-[90vw] sm:w-[85vw] lg:w-[80vw] mx-auto min-h-screen lg:min-h-[calc(100vh-64px)]"
      id="experience"
    >
      <motion.h2
        className="mb-12 sm:mb-16 lg:mb-20 text-3xl sm:text-4xl lg:text-5xl font-bold"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ./Experience
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 gap-12 sm:gap-16 lg:gap-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.3, // stagger animation for items
            },
          },
        }}
      >
        <ExperienceItem
          logo={capLogo}
          company="Capgemini"
          role="Software Analyst"
          period="May 2023 - July 2023"
          location="Gandhinagar, India"
          description="Spearheaded the development of a cutting-edge Hospital Information Management Software (HIMS) leveraging the government-initiated ABDM architecture, while employing Agile software development life cycle (SDLC), revolutionizing patient record digitization possibly impacting 65% of doctors-patients interactions."
          technologies={["React", "Node.js", "MongoDB"]}
          domains={["Healthcare"]}
        />
        <ExperienceItem
          // logo={infoLogo}
          company="INFOWARE INDIA"
          role="NodeJs Developer"
          period="Jan 2024 - Present"
          location="Ahmedabad, India"
          description="Engaged in the development of scalable backend solutions for healthcare, education, and enterprise applications, including Hospital Management Systems, LMS platforms, CRM tools, and Alumni projects. Contributed to system architecture, API development, and database optimization, gaining hands-on experience with Node.js, MySQL, MongoDB, and Sequelize. Collaborated with cross-functional teams to deliver efficient, well-documented, and production-ready solutions within a professional environment."
          technologies={[
            "Node.js",
            "MongoDB",
            "MySQL",
            "WebSockets",
            "TypeScript",
            "OpenAI",
          ]}
          domains={[
            "Conversational CRM",
            "Supply Chain Management",
            "Workforce Productivity & Time Tracking",
            "Education",
            "Healthcare",
          ]}
        />
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
