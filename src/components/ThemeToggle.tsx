import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from 'lucide-react';
const ThemeToggle: React.FC = () => {
  const {
    darkMode,
    toggleDarkMode
  } = useTheme();
  return <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500" aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}>
      {darkMode ? <SunIcon size={20} className="text-orange-500" /> : <MoonIcon size={20} className="text-white" />}
    </button>;
};
export default ThemeToggle;