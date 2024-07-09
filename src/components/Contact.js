import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTiktok } from 'react-icons/fa'; // Import icons from react-icons
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'contact',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: 'Submit Form RapliPortfolio',
      category: formData.category,
      message: formData.message
    };

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_USER_ID'
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       alert('Yeayy! emailnya terkirim. Tunggu ya balasannya');
    })
    .catch((err) => {
       console.error('FAILED...', err);
       alert('Yahh gagal kirim emailnya, kayanya ada yang error. kamu bisa kirim lewat DM sosmed kok');
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 dark:text-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-4">Let's 👋 Work Together</h2>
      <p>You can email me using the form below, or you can reach me on the following social media networks:</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 mt-4">
        <a
          href="https://instagram.com/rflimaulanaaa_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2"
        >
          <FaInstagram className="text-pink-500" size={32} />
        </a>
        <a
          href="https://linkedin.com/in/raflimaulana-"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2"
        >
          <FaLinkedin className="text-blue-700" size={32} />
        </a>
        <a
          href="https://github.com/rapleeee"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2"
        >
          <FaGithub className="text-gray-800 dark:text-gray-200" size={32} />
        </a>
        <a
          href="https://www.tiktok.com/@_rapleee?_t=8nscdoqIyOH&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2"
        >
          <FaTiktok className="text-gray-800 dark:text-gray-200" size={32} />
        </a>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            required
          >
            <option value="contact">Contact</option>
            <option value="web/app design">Web/App Design</option>
            <option value="web development">Web Development</option>
            <option value="app development">App Development</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
