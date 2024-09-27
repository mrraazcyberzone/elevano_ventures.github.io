import React from 'react'
import { useState } from "react";

function Brand_strategy() {

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
      title: "Brand Launch / Go-to-Market Strategy",
      content:
        "A successful brand launch, go-to-market (GTM) strategy and impactful brand design are essential in a brand strategy solution. This entails market research, compelling brand identity, and effective marketing, all aligned with your brand's unique value. By executing these key elements, your brand can establish a strong presence in the market and resonate with your target audience.",
    },
    {
      title: "Brand Communication",
      content:
        "Brand communication plays a pivotal role in brand strategy solutions, serving as the bridge that connects a brand with its target audience. It shapes perceptions, builds trust, and fosters lasting customer relationships in today's dynamic business landscape.",
    },
    {
      title: "Content Strategy",
      content:
        "Content strategy is the cornerstone of effective communication design, guiding how a brand communicates and connects with its audience. It involves audience analysis, messaging consistency, and strategic content creation and distribution. A well-executed content strategy enhances brand visibility, engagement, and trust in the digital landscape.",
    },
    {
      title: "ATL & BTL Strategy",
      content:
        "ATL (Above-The-Line) focuses on mass media like TV and radio for broad brand visibility, while BTL (Below-The-Line) targets specific audiences through tactics like social media and events. Integrating both strategies in brand solutions ensures a comprehensive approach, maximizing reach and engagement while tracking ROI effectively.",
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
          <h1 className="text-black-500 border-b-2 border-black-500 font-bold relative pb-2 text-2xl md:text-4xl">Brand Strategy</h1>
          <p className="text-base md:text-2xl font-semibold mt-4">
          Great content is not created by chance; it is a result of thoughtful planning and strategic thinking.
          Our creative communication design solutions begin with a robust content strategy tailored to your brand's unique needs and goals. We delve deep into your industry, target audience, and competitors to develop a roadmap that ensures your content speaks directly to the hearts of your customers.
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

export default Brand_strategy
