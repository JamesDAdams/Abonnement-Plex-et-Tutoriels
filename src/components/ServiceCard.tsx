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
  return <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-shadow">
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full ${color.replace('bg-', 'bg-').replace('500', '100')} ${color.replace('bg-', 'text-')}`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold ml-4 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        <Link to={tutorialLink} className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
          Voir le tutoriel
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>;
};
export default ServiceCard;