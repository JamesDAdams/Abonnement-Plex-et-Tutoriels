import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tutorialLink: string;
  color: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  tutorialLink,
  color
}) => {
  return <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg">
      <div className={`h-1 ${color}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full ${color.replace('bg-', 'bg-').replace('500', '900')} ${color.replace('bg-', 'text-')}`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold ml-4 text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        <Link to={tutorialLink} className="flex items-center text-orange-500 font-medium hover:text-orange-400 transition-colors">
          Voir le tutoriel
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>;
};
export default ServiceCard;