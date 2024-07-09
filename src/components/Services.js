import React from 'react';

const Services = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Services</h2>
      <p>I offer the following services:</p>
      <ul className="list-disc list-inside">
        <li>Web Design</li>
        <li>Web Development</li>
        <li>App Development</li>
        {/* Add more services */}
      </ul>
    </div>
  );
};

export default Services;
