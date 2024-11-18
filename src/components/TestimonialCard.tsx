import React from 'react';
import { useInView } from 'react-intersection-observer';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  image,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`gradient-border transform transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <h4 className="font-bold text-cyan-400">{name}</h4>
            <p className="text-sm text-gray-400">{role} at {company}</p>
          </div>
        </div>
        <p className="text-gray-300 italic">{content}</p>
      </div>
    </div>
  );
};