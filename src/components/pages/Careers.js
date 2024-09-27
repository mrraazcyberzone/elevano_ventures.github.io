import React from 'react'
import { useState } from "react";
import VideoPlayer from "../VideoPlayer"

function Careers () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    jobLocation: "",
    currentCompany: "",
    currentCTC: "",
    position: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);
  };
  return (
    <>
      <section className="mx-auto mt-8 px-4 sm:ml-6 md:ml-10 font-josefin">
      <h1 className="text-black-500 border-b-2 border-black-500 font-bold relative pb-2 text-2xl md:text-4xl">Careers</h1>
      <p className="text-2xl font-bold mt-4">
        Join the clan of #theideapeople and be a part of our family, 
        where your ideas are valued, your creativity is celebrated, and together, we'll continue 
        to craft extraordinary stories that captivate the world.
      </p>
      </section>
      <section className="container mx-auto mt-5 px-4">
        <h2 className="text-primary text-center text-2xl text-red-600 md:text-4xl font-bold mb-4">Elevano Ventures Private Limited</h2>
        <div className="text-center mt-4">
          <div className="relative">
          <VideoPlayer
          desktopVideoPath="/videos/home_page.mp4"
          mobileVideoPath="/videos/home_page.mp4"
          width="100%"
          height="auto"
        />
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-left">Apply Here</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Experience</label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          {/* Job Location */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Current Job Location</label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              required
            />
          </div>

          {/* Current Company */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Current Company</label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="currentCompany"
              value={formData.currentCompany}
              onChange={handleChange}
              required
            />
          </div>

          {/* Current CTC */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Current CTC</label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="currentCTC"
              value={formData.currentCTC}
              onChange={handleChange}
              required
            />
          </div>

          {/* Apply Position */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Apply Position</label>
            <select
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Position</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Your CV/Resume</label>
          <div className="w-full h-32 flex justify-center items-center border-dashed border-2 border-gray-300 rounded-lg p-4">
            <input
              className="w-full px-3 py-2"
              type="file"
              name="resume"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>

        {/* Captcha */}
        <div className="mb-4 flex items-center">
          <input type="checkbox" required className="mr-2" />
          <label className="text-sm">I'm not a robot</label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Apply
          </button>
        </div>
      </form>
    </div>

    </>
  )
}
export default Careers;