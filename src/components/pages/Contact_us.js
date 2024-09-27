import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Contact_us() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    city: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      company: formData.company,
      city: formData.city,
      message: formData.message
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_c8esb3d', // Replace with your EmailJS service ID
        'template_bhp1wpm', // Replace with your EmailJS template ID
        templateParams,
        'mpi4lwnxSKwfntAZO' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccess(true);
          setIsSubmitting(false);
          setFormData({
            name: '',
            phone: '',
            email: '',
            company: '',
            city: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error);
          setSuccess(false);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <section className="mx-auto mt-8 px-4 sm:ml-6 md:ml-10">
        <h1 className="text-black-500 border-b-2 border-black-500 font-bold relative pb-2 text-2xl md:text-4xl">
          Contact Us
        </h1>
      </section>

      <section className="container mx-auto p-4 sm:ml-0">
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-center">Grow Your Business Today! 🚀</h2>
            <p className="text-center mb-6 text-gray-600">
              A 360-degree Branding, Advertising, Creative, Digital Marketing and Communication Agency
            </p>
            <div className="bg-white p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
                    Your Message (optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight"
                    placeholder="Your message"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
                {success && <p className="text-green-500 mt-4">Your message has been sent successfully!</p>}
                {success === false && <p className="text-red-500 mt-4">Failed to send the message. Please try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-5 mb-5 ml-5">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Headquarters Section */}
          <div className="space-y-5">
            <h4 className="font-semibold text-2xl">Head Quarters</h4>

            {/* Address */}
            <div className="flex items-start">
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="text-red-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                </svg>
              </span>
              <p className='sm:text-base md:text-xl'>
                Elevano Ventures Private Limited <br />
                C-79, Sector 2, F-4 Basement, Noida, <br />
                Gautam Buddha Nagar | 201301, Uttar Pradesh
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="text-red-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
                </svg>
              </span>
              <Link to="mailto:Info@elevanoventure.com" className='hover:text-red-500 sm:text-base md:text-xl'>Info@elevanoventure.com</Link>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="text-red-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                </svg>
              </span>
              <Link to="tel:+919821116003" className='hover:text-red-500 sm:text-base md:text-xl'>+919821116003</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact_us;
