
import { useEffect, useState } from 'react';
import {FaMoon, FaSun} from "react-icons/fa";

const ColorModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <div className='float-right mr-auto'>
        <button onClick={() => setDarkMode(!darkMode)} className='border rounded-md px-2 py-2 text-lg bg-transparent border-gray-300 
        hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 transition duration-300'>
            {darkMode? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
};

export default ColorModeToggle;