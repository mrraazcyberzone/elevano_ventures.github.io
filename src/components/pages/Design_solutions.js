import React from 'react'
import { useState } from "react";

function Design_solutions() {

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const accordionData = [
    {
      title: "Graphic Design",
      content:
        "Graphic design shapes effective design solutions by visually communicating ideas, building brand identities, and enhancing user experiences across print and digital media. Our designers create eye-catching marketing materials, user-friendly interfaces, and memorable logos to engage audiences and convey messages effectively.",
    },
    {
      title: "Packaging Design",
      content:
        "Packaging design merges aesthetics, functionality, and brand identity to captivate consumers and differentiate products in a competitive market. It communicates essential information, reflects eco-consciousness, and adapts to evolving trends, ensuring a holistic design solution that influences purchasing decisions while protecting the product.",
    },
    {
      title: "Illustrations",
      content:
        "Illustrations are essential in design, adding aesthetic appeal, simplifying complex ideas, and fostering emotional connections. They play a vital role in branding, storytelling, and enhancing user experiences across various design disciplines, making them a cornerstone of effective design solutions.",
    },
    {
      title: "Video Editing & Motion Graphics",
      content:
        "Video editing and motion graphics are integral to modern design solutions, elevating visual appeal and storytelling across various media. They establish brand identity, simplify complex information, and enhance user experiences, making them indispensable in marketing, education, and entertainment. In the digital age, these tools are essential for creating engaging and impactful content.",
    },   
  ];

  const projects = [
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/TWASA-THUMBNAIL-HOMEPAGE-2.jpg',
      title: 'Twasa',
      description: 'Brand Strategy, Media & Advertising, Design Solutions, Content Solutions',
    },
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/NUTRITUAL-THUMBNAIL-HOMEPAGE-2.jpg',
      title: 'Nutritual',
      description: 'Design Solutions, Content Solutions, Digital Marketing, Web Development',
    },
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2024/01/3.jpg',
      title: 'The Kurta Company',
      description: 'Brand Strategy, Design Solutions, Digital Marketing, Influencer Marketing, Web Development',
    },
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/ZEEL-01-1-scaled.jpg',
      title: 'Zeel Rainwear',
      description: 'Digital Marketing, Performance Marketing, Web Development',
    },
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/HOMEPAGE-THUMBNAIL.jpg',
      title: 'Britannia',
      description: 'Media & Advertising, Digital Marketing, Content Solutions',
    },
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Portfolio-Work-01.jpg',
      title: 'Havmor',
      description: 'Brand Strategy, Design Solutions, Content Solutions',
    },
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Portfolio-Work-01-3-scaled.jpg',
      title: 'Vadilal',
      description: 'Design Solutions, OOH',
    },
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/GOYAL-HOME-1-copy.jpg',
      title: 'Spirit Of Goyal',
      description: 'Content Solutions, Podcast Marketing',
    },
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Thumb-for-Homepage-Copy-1920x1080-2.jpg',
      title: 'MYBYK – Manan Desai',
      description: 'Media & Advertising, Design Solutions, Content Solutions',
    },
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Portfolio-thmub-2.jpg',
      title: '2baconil – Influencer Campaign',
      description: 'Media & Advertising, Design Solutions, Content Solutions, Web Development',
    },
  ];

  const clientLogos = [
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo15.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo14.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo13.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo11.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo10.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo12.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo6.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo7.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo8.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo9.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo3.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo4.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo5.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo2.png",
    "https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo1.png",
  ];

  return (
    <>
      <section className="mx-auto mt-8 px-4 sm:ml-6 md:ml-10 font-josefin">
          <h1 className="text-black-500 border-b-2 border-black-500 font-bold relative pb-2 text-2xl md:text-4xl">Design Solutions</h1>
          <p className="text-base md:text-2xl font-semibold mt-4">
          We don't design in isolation; we craft immersive experiences that captivate and engage your audience.
          Whether it's a website that tells a compelling story, packaging that creates anticipation, or a digital campaign that sparks emotion, our brand design services are geared towards crafting experiences that leave a lasting impression.
          </p>
      </section>
      <div className="flex mt-4 text-lg font-bold">
      <a
        href="/contact_us"
        className="bg-red-600 ml-4 md:ml-12 text-white py-2 px-4 rounded hover:bg-[#000000] transition duration-300"
      >
        Let's Connect
      </a>
      </div>
      <div className="mx-auto mt-8 px-4">
        <div className="mt-8 px-2 md:px-8  mx-auto">
          {accordionData.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full font-semibold focus:outline-none text-xl border-b border-gray-950 md:text-2xl py-3 flex justify-between items-center"
              >
                <span>{item.title}</span>
                <span className="text-5xl font-light">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="mt-6 py-2 text-gray-800 font-medium">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="container mx-auto mt-4 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="mt-4">
              <a href={project.href}>
                <img
                  src={project.imgSrc}
                  alt={project.imgAlt}
                  className="w-full h-auto object-cover"
                />
              </a>
              <div className="pro-detail mt-3">
                <p>
                  <span className="pro-name text-lg font-bold mb-3 block">
                    <a href={project.href}>{project.title}</a>
                  </span>
                  <span className="block text-sm">{project.description}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto mt-10 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">Our Clients</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {clientLogos.map((logo, index) => (
          <div key={index} className="service-logo p-4">
            <img
              src={logo}
              alt={`client-${index}`}
              className="mx-auto h-auto max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28 object-contain"
            />
          </div>
        ))}
      </div>
      </section>
    </>
  )
}

export default Design_solutions