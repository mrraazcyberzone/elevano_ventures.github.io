import React from 'react'
import { useState } from "react";


function Content_solutions() {

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
      title: "Video Commercials",
      content:
        "Digital commercials are a strategic powerhouse for any brand. They captivate audiences, convey brand stories, and provide measurable results, creating emotional connections that elevate brand strategies to new heights.",
    },
    {
      title: "Product Photography",
      content:
        "Product photography plays a pivotal role in brand strategy solutions and is imperative for any brand looking to establish a strong online and offline presence. In today's visually oriented and highly competitive marketplace, the quality and presentation of a brand's products can make or break its success.",
    },
    {
      title: "Influencer Management",
      content:
        "Influencer marketing is a pivotal aspect of modern brand strategy solutions. By harnessing the power of influencers, brands can authentically engage their target audience, leverage trusted voices, and drive impactful content creation, enhancing their overall marketing effectiveness.",
    },
    {
      title: "Short Form Content (Reels)",
      content:
        "Short-form content, like Reels on platforms such as Instagram, is an essential element of modern brand strategies. It offers a quick and visually engaging way for brands to connect with audiences, leverage trends, and foster authenticity, ultimately increasing reach and engagement. Incorporating Reels requires creative storytelling and a deep understanding of platform dynamics to make a meaningful impact in the digital marketing landscape.",
    },
    {
      title: "Computer Generated Imagery (CGI)",
      content:
        "Computer Generated Imagery (CGI) refers to the creation of visual content using computer software to generate lifelike images, animations, or special effects. In advertising, CGI is employed to craft visually captivating content that ranges from realistic product renderings to fantastical storytelling, effectively engaging audiences and conveying brand messages with stunning visual impact.",
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
          <h1 className="text-black-500 border-b-2 border-black-500 font-bold relative pb-2 text-2xl md:text-4xl">Content Solutions</h1>
          <p className="text-base md:text-2xl font-semibold mt-4">
          From simplified explainer videos and stunning motion graphics to captivating digital commercials and TV commercials our talented team of producers, video editors, and animators bring your ideas to life with fascinating visuals. Whether it's telling your brand story, showcasing your products, or explaining the process of installing and using your product, our creative expertise ensures the message is clear and engages your target audience every step of the way.
          ZGC is a go-to destination for cutting-edge production services that bring your brand's vision to life.
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

export default Content_solutions