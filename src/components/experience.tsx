import React from "react";
import capLogo from "../assets/images/capgeminiLogo.svg";
// import infoLogo from "../assets/images/infowareLogo.png";

interface ExperienceItemProps {
  logo?: string; // Marked as optional
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
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
}) => (
  <div className="grid grid-cols-1 gap-[3vh] lg:grid-cols-[30%,70%] lg:gap-0 items-start">
    <div>
      {logo ? (
        <img
          src={logo}
          alt={`${company} logo`}
          className="lg:w-[55%] w-[35%]"
        />
      ) : (
        <div className="font-bold text-2xl text-green-400">{company}</div>
      )}
      <div className="grid grid-cols-1 items-start gap-[5%]">
        <h4 className="text-md text-gray-300">{role}</h4>
        <div className="text-xs mr-4">{period}</div>
        <div className="text-xs flex items-center">
          <LocationIcon />
          {location}
        </div>
      </div>
    </div>
    <p className="text-sm text-gray-300 text-justify">{description}</p>
  </div>
);

const ExperienceSection: React.FC = () => {
  return (
    <section className="text-white py-10 w-[80vw] lg:h-[calc(91vh-32px)] mx-auto">
      <h2 className="lg:h-[20%] lg:mb-0 mb-[7vh]" style={{fontSize: '2.5rem'}}>./Experience</h2>
      <div className="grid grid-cols-1 gap-[5vh] lg:gap-0 lg:h-[80%] place-content-around">
        <ExperienceItem
          logo={capLogo}
          company="Capgemini"
          role="Software Analyst"
          period="May 2023 - July 2023"
          location="Gandhinagar, India"
          description="Spearheaded the development of a Hospital Information Management Software (HIMS) leveraging the government-initiated ABDM architecture, while employing Agile software development life cycle (SDLC), revolutionizing patient record digitization possibly impacting 65% of doctors-patients interactions."
        />
        <ExperienceItem
          // logo={infoLogo}
          company="INFOWARE INDIA"
          role="Software Engineer"
          period="Jan 2024 - Present"
          location="Ahmedabad, India"
          description="Engaged in the development of a Hospital Information Management System and Alumni project as part of an ongoing internship. Contributed to various aspects of system design, implementation, and testing, gaining hands-on experience in software development and project management within a professional environment."
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
