import React, { useState } from 'react';
import { Link } from "react-router-dom";
import VideoPlayer from "../VideoPlayer"


function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: 'Media & Advertising',
      description: 'We craft innovative media solutions that captivate audiences, spark conversations, and drive remarkable results.',
      imageUrl: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Media-Advertising.png',
      services: ['Campaign Planning', 'Media Buying (Print, OOH, Radio)', 'Media Planning', 'Performance Marketing', 'Marketplace Management', 'Social Media Marketing'],
      link: '/media_advertising',
    },
    {
      id: 2,
      title: 'Brand Strategy',
      description: 'We devise brand strategies that resonate powerfully with your audience, leaving an indelible mark in the ever-evolving world of marketing.',
      imageUrl: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Brand-Strategy.png',
      services: ['Brand Launch', 'Go-to-Market Strategy', 'Brand Communication', 'Content Strategy', 'ATL & BTL Strategy'],
      link: '/brand_strategy',
    },
    {
      id: 3,
      title: 'Design Solutions',
      description: 'We create designs that are visually stunning, functional, and deeply resonate with your audience.',
      imageUrl: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Design-Solutions.png',
      services: ['Logo Design', 'Graphic Design', 'Packaging Design', 'Merchandising', 'Illustrations', 'Video Editing & Motion Graphics'],
      link: '/design_solutions',
    },
    {
      id: 4,
      title: 'Content Solutions',
      description: 'We generate long and short forms of content for your brand and establish a strong visual brand presence in the minds of the consumers.',
      imageUrl: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Content-Solutions.png',
      services: ['Video Commercials (TVC/DVC)', 'Photography (Product/Lifestyle)', 'Influencer Management', 'Short Form Content (Reels)', 'Computer Generated Imagery (CGI)'],
      link: '/content_solutions',
    },
    {
      id: 5,
      title: 'Web Development',
      description: 'We design a seamless website experience that makes the navigation smooth for your audience.',
      imageUrl: 'https://www.zerogravitycommunications.com/wp-content/uploads/2024/02/New-Project-4.webp',
      services: ['UI/UX', 'Web Development', 'Web Maintenance', 'Shopify', 'WordPress', 'Search Engine Optimization', 'E-Commerce', 'WhatsApp/Email Marketing'],
      link: '/web_development',
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'We analyze content performance, gather insights, and optimize our strategies to drive exceptional results.',
      imageUrl: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Digital-Marketing.png',
      services: ['Amazon Management', 'Flipkart Management', 'Quick Commerce Support', 'Digital Marketing Services', 'Influencer Marketing', 'Meta Ads', 'Google Ads', 'Data Analytics'],
      link: '/digital_marketing',
    },
  ];

  const closeMenu = () => {    
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="text-center mt-0">
      <div>
        <VideoPlayer
          desktopVideoPath="/videos/home_page.mp4"
          mobileVideoPath="/videos/home_page.mp4"
          width="100%"
          height="auto"
        />
      </div>
      </section>
      <div className="text-center mt-2">
        <h1 className="text-4xl font-bold">
          A 360-Degree{' '}
          <Link to="/brand_strategy"
            className="text-black-500 hover:text-red-600" onClick={closeMenu}
          >
            Branding
          </Link>,{' '}
          <Link to="/media_advertising"
            className="text-black-500 hover:text-red-600" onClick={closeMenu}
          >
            Advertising
          </Link>,{' '}
          <Link to="/design_solutions"
            className="text-black-500 hover:text-red-600" onClick={closeMenu}
          >
            Creative
          </Link>,{' '}
          <Link to="/digital_marketing"
            className="text-black-500 hover:text-red-600" onClick={closeMenu}
          >
            Digital Marketing
          </Link> And{' '}
          <Link to="/content_solutions"
            className="text-black-500 hover:text-red-600" onClick={closeMenu}
          >
            Communication
          </Link>{' '}
          Agency
        </h1>
      </div>
      <div className="flex justify-center mt-2 text-lg font-bold">
        <a
          href="/contact_us"
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-[#000000] transition duration-300"
        >
          Let's Connect
        </a>
      </div>
      <section className="container mx-auto mt-8" id="services">
        <div className="flex flex-col lg:flex-row">
          {/* Tabs List */}
          <div className="lg:w-1/4 hidden lg:block">
            <ul className="space-y-4">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    className={`block w-full text-left p-4 ml-8 font-normal text-2xl border-l-2 transition-colors ${
                      activeTab === tab.id
                        ? 'text-red-500'
                        : 'text-black-500'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Scroller */}
          <div className="lg:hidden w-full overflow-x-auto whitespace-nowrap space-x-4 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`inline-block p-4 font-semibold text-lg border-l-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-red-500'
                    : 'text-black-500'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:w-3/4 mt-8 lg:mt-0 lg:pl-8">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="flex flex-col lg:flex-row items-center">
                    <img
                      src={tab.imageUrl}
                      alt={tab.title}
                      className="w-full lg:w-3/5 rounded-lg shadow-md mb-6 lg:mb-0 lg:mr-8"
                    />
                    <div className="lg:w-2/5 m-3">
                      <p className="text-lg mb-4">{tab.description}</p>
                      <ul className="list-disc list-inside mb-6">
                        {tab.services.map((service, index) => (
                          <li key={index} className="mb-2">
                            {service}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={tab.link}
                        className="inline-block bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>     
      </section>
      <section className="mt-5 home-client-section">
        <h2 className="text-center mb-4 text-4xl font-bold">Our Clients</h2>
        <div className="relative">       
          <div className="overflow-hidden">
            <div className="flex space-x-4">
              {/* Slide items */}
              {[...Array(14)].map((_, index) => (
                <div key={index} className="w-20">
                  <img 
                    src={`https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/client-logo${index + 1}.png`} 
                    width="105" 
                    height="40" 
                    className="w-full h-auto"
                    alt="client" 
                  />
                </div>
              ))}
            </div>
          </div>       
        </div>
      </section>
      <section className="container mx-auto my-10">
    <div className="text-center flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
      <img 
        src="https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/partner-1.png" 
        className="w-full max-w-80 mx-auto" 
        alt="Partner" 
      />
      <img 
        src="https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/partner-2.png" 
        className="w-full max-w-xs mx-auto" 
        alt="Partner" 
      />
      <img 
        src="https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/partner-3.png" 
        className="w-full max-w-xs mx-auto" 
        alt="Partner" 
      />
      <img 
        src="https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/partner-4.png" 
        className="w-full max-w-xs mx-auto" 
        alt="Partner" 
      />
      <img 
        src="https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/partner-5.png" 
        className="w-full max-w-xs mx-auto" 
        alt="Partner" 
      />
    </div>
      </section>
    </>
  );
}

export default Home;
