import React from 'react'
import { useState } from "react";


function Web_development() {

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
      title: "UI/UX Design",
      content:
        "UI/UX design in web development merges aesthetics (UI) and functionality (UX) to create visually appealing and user-friendly digital experiences. It's a synergy between crafting an engaging visual identity (UI) and enhancing user satisfaction through efficient interaction design (UX). Successful websites combine both aspects to engage users effectively.",
    },
    {
      title: "Web Development",
      content:
        "Web development is the process of creating and maintaining websites or web applications on the World Wide Web. It encompasses a wide range of tasks, technologies, and skills that are essential for building and enhancing online experiences.",
    },
    {
      title: "Web Maintenance",
      content:
        "Web maintenance involves ongoing tasks like content updates, security patches, and performance optimization to ensure a secure, up-to-date, and user-friendly website. It's a critical process for maintaining a website's functionality, security, and relevance in the digital landscape. Regular monitoring and adaptation to industry trends are essential for long-term success.",
    },
    {
      title: "Shopify Website Development",
      content:
        "Shopify ecommerce website development involves setting up, customizing, and optimizing online stores, ensuring a seamless shopping experience, and integrating essential features such as payment gateways and SEO optimization. It's a popular choice for businesses looking to establish a robust online presence and grow their e-commerce operations.",
    },
    {
      title: "WordPress Website Development",
      content:
        "WordPress website development offers a user-friendly CMS, extensive themes, and plugins for customization. Its SEO-friendliness, scalability, and security make it ideal for diverse online projects. With a vibrant community and e-commerce capabilities, WordPress is a top choice for building effective websites.",
    },
    {
      title: "Search Engine Optimization",
      content:
        "Search Engine Optimization (SEO) is crucial in web development, involving keyword research, mobile optimization, and technical SEO for better rankings. SEO-friendly CMS selection and continuous monitoring ensure websites stay competitive and user-friendly, ultimately enhancing online visibility.",
    }, 
    {
      title: "E-Commerce",
      content:
        "E-commerce web development entails designing user-friendly interfaces, ensuring security, and optimizing performance for efficient online shopping experiences. Responsive design, SEO, and data analytics play vital roles in creating successful e-commerce websites. As online shopping continues to grow, e-commerce remains a central focus for web developers, adapting to evolving consumer trends and preferences.",
    }, 
    {
      title: "WhatsApp/Email Marketing",
      content:
        "WhatsApp and email marketing are vital components of web development. Integrating WhatsApp for instant communication and using responsive design and automation in email marketing can significantly enhance customer engagement and conversion rates on websites. Web developers play a pivotal role in seamlessly integrating these strategies to help businesses connect with their target audience effectively.",
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
          <h1 className="text-black-500 border-b-2 border-black-500 font-bold relative pb-2 text-2xl md:text-4xl">Web Development</h1>
          <p className="text-base md:text-2xl font-semibold mt-4">
          We pride ourselves on using a comprehensive technology stack that enables us to deliver top-notch WordPress and Shopify e commerce development services.
          Our technology stack is carefully curated to ensure seamless integration, enhanced performance marketing, and unmatched user experiences for our clients.
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

export default Web_development