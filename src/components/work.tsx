import React from 'react';

interface WorkItemProps {
  number: number;
  title: string;
  gradient: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ number, title, gradient }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-gray-400">({number.toString().padStart(2, '0')})</span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className={`w-full h-48 rounded-lg ${gradient}`}></div>
  </div>
);

const WorkSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">./Work</h2>
        <WorkItem 
          number={1}
          title="Sketch Sense"
          gradient="bg-gradient-to-b from-blue-300 to-purple-200"
        />
        <WorkItem 
          number={2}
          title="Micro-service Ecommerce"
          gradient="bg-gradient-to-b from-red-300 via-pink-200 to-teal-300"
        />
      </div>
    </section>
  );
};

export default WorkSection;
