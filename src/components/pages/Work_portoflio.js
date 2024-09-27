import React from 'react'

function Work_portfolio() {
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
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Thumb-for-Portfolio-800x450-2.jpg',
      title: 'Indira Ivf',
      description: 'Content Solutions, Digital Marketing, Media & Advertising',
    },
    {
      imgSrc: 'https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/Jaguipari-Home-1.jpg',
      title: 'Jadui Pari',
      description: 'Digital Marketing',
    },
  ];

  return (
    <>
      <section className="container mx-auto mt-8 px-4">
        <h1 className="text-black-500 border-b-2 border-black-500 font-bold relative pb-2 text-2xl md:text-4xl">
          Explore Our Latest Work
        </h1>
      </section>
      <section className="container mt-10 px-4 sm:ml-0 md:ml-10">
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10">
              <a href={project.link}>
                <img
                  src={project.imgSrc}
                  width="456"
                  height="286"
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </a>
              <div className="mt-3 font-josefin">
                <p className="break-words">
                  <span className="block text-lg sm:text-xl md:text-2xl font-semibold mb-1">{project.title}</span>
                  <span className="block text-sm sm:text-base">{project.description}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Work_portfolio;