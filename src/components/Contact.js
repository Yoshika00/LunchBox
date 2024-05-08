
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
    // You can perform further actions here, like sending data to a server
  };

  return (
    <div className=' max-w-md m-5 p-4 bg-gray-100 rounded-lg shadow-md mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Contact us</h2>
      <form onSubmit={handleSubmit}>
        
        <div className='mb-4'>
          <input
            type="text"
            placeholder='Enter Your Name'
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        
        <div className='mb-4'>
          <input
            type="email"
            placeholder='Enter Your Email'
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className='mb-4'>
          <textarea
            name="message"
            placeholder='Write your thoughts here...'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" >Submit</button>
       
      </form>
    </div> 
  );
}

export default Contact;