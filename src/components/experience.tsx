import React from 'react';
import capLogo from '../assets/images/capgeminiLogo.svg';
import infoLogo from '../assets/images/infowareLogo.png';

interface ExperienceItemProps {
  logo?: string; // Marked as optional
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  logo,
  company,
  role,
  period,
  location,
  description,
}) => (
  <div className="mb-12 rounded-lg p-6">
    <div className="flex items-start mb-4">
      <div className="w-1/4 mr-6">
        {logo ? (
          <img src={logo} alt={`${company} logo`} className="w-full max-w-[120px]" />
        ) : (
          <div className="text-center font-bold text-2xl text-white max-w-[120px]">{company}</div>
        )}
        <h4 className="text-lg font-semibold text-gray-300 mb-2">{role}</h4>
        <div className="text-sm text-gray-400 mb-4">
          <div className="mr-4">{period}</div>
          <div className="flex items-center">
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
            {location}
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

const ExperienceSection: React.FC = () => {
  return (
    <section className="text-white py-16 w-[80vw] h-[91vh] mx-auto">
      <div className="container">
        <h2 className="text-5xl h-[18vh]">./Experience</h2>

        <ExperienceItem 
          logo={capLogo}
          company="Capgemini"
          role="Software Analyst"
          period="May 2023 - July 2023"
          location="Ahmedabad, India"
          description="Spearheaded the development of a Hospital Information Management Software (HIMS) leveraging the government-initiated ABDM architecture, while employing Agile software development life cycle (SDLC), revolutionizing patient record digitization possibly impacting 65% of doctors-patients interactions."
        />
        <ExperienceItem 
          logo={infoLogo}
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
