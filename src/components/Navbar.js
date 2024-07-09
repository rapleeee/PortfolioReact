import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate();
    const timeOfDay = hours < 12 ? 'morning' : 'afternoon';
    setGreeting(`Good ${timeOfDay}`);
    setDate(`${month} ${day}`);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="flex justify-between items-center p-4 ">
      <div>
        <span className="text-xl font-bold dark:text-white">{greeting}</span>
        <span className="text-sm ml-2 dark:text-gray-400">{date}</span>
      </div>
      <button onClick={toggleDarkMode} className="focus:outline-none">
        {isDarkMode ? '🌞' : '🌜'}
      </button>
    </nav>
  );
};

export default Navbar;
