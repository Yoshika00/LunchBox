
import React, { useState } from 'react';

const Contact = ()  => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
  e.preventDefault();

  console.log('Form submitted with data:', formData);

  setFormData({
    fullName: '',
    email: '',
    message: '',
  });
};

  return (
    <div className="pt-16 flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
        
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Write your thoughts here..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto sm:px-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;


