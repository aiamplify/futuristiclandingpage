import React from 'react';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon }) => {
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
      <div className="p-6 h-full">
        <div className="mb-4">
          <Icon className="w-12 h-12 text-cyan-400" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-cyan-400 glow-text">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};