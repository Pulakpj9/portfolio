import React from 'react';
import { motion } from 'framer-motion';

interface WorkItemProps {
  number: number;
  title: string;
  gradient: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ number, title, gradient }) => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-gray-400">
        ({number.toString().padStart(2, '0')})
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <motion.div
      className={`w-full h-48 rounded ${gradient}`}
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      viewport={{ once: true }}
    />
  </motion.div>
);

const WorkSection: React.FC = () => {
  return (
    <section className="text-white py-16 w-[80vw] mx-auto" id="work">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          ./Work
        </motion.h2>

        {/* Work Items */}
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
