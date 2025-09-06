import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
interface TutorialLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  color: string;
}
const TutorialLayout: React.FC<TutorialLayoutProps> = ({
  title,
  description,
  children,
  icon,
  color
}) => {
  return <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ChevronLeft size={20} />
        <span>Retour à l'accueil</span>
      </Link>
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-full ${color.replace('bg-', 'bg-').replace('500', '100')} ${color.replace('bg-', 'text-')} mr-4`}>
          {icon}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">{children}</div>
    </div>;
};
export default TutorialLayout;