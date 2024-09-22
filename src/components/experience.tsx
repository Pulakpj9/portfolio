const ExperienceItem = ({ logo, company, role, period, location, description }) => (
  <div className="mb-12 bg-gray-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-start mb-4">
      <div className="w-1/4 mr-6">
        <img src={logo} alt={`${company} logo`} className="w-full max-w-[120px]" />
      </div>
      <div className="w-3/4">
        <h3 className="text-2xl font-bold text-white mb-1">{company}</h3>
        <h4 className="text-lg font-semibold text-gray-300 mb-2">{role}</h4>
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span className="mr-4">{period}</span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {location}
          </span>
        </div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">./Experience</h2>
        <ExperienceItem 
          logo="/path-to-capgemini-logo.png"
          company="Capgemini"
          role="Software Analyst"
          period="may 2023 - july 2023"
          location="Ahmedabad, India"
          description="Spearheaded the development of a Hospital Information Management Software (HIMS) leveraging the government-initiated ABDM architecture, while employing Agile software development life cycle (SDLC), revolutionizing patient record digitization possibly impacting 65% of doctors-patients interactions."
        />
        <ExperienceItem 
          logo="/path-to-infoware-logo.png"
          company="INFOWARE"
          role="Software Engineer"
          period="Jan 2024 - today"
          location="Ahmedabad, India"
          description="Engaged in the development of a Hospital Information Management System and Alumni project as part of an ongoing internship. Contributed to various aspects of system design, implementation, and testing, gaining hands-on experience in software development and project management within a professional environment."
        />
      </div>
    </section>
  );
};

export default ExperienceSection;