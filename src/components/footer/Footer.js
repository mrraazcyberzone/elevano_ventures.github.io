import React from 'react';
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";


function Footer() {
  const closeMenu = () => {    
    window.scrollTo(0, 0);
  };


  return (
    <>
      <footer className="bg-black mt-5">
        <div className="container mx-auto px-4 py-8">
          <h4 className="text-white mb-4 font-bold text-4xl">
            Got big plans for your brand or a new project?{" "}
            <span className="text-primary">
              <Link
                to="https://api.whatsapp.com/send/?phone=919821116003&amp;text&amp;type=phone_number&amp;app_absent=0"
                className="text-red-600"
              >
                Let's chat!
              </Link>
            </span>
          </h4>
          <p className="mb-4 font-medium text-base md:text-3xl">
          <Link
            to="mailto:Info@elevanoventure.com"
            className="text-gray-700 hover:text-red-600"
          >
            Info@elevanoventure.com
          </Link>
        </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {/* Column 1 */}
            <div className="border-t border-red-500">
              <ul className="list-none  border-primary pt-4 space-y-3 mt-4">
                <li className="font-bold text-white mb-2">
                  <Link
                    to="/"
                    className="text-white font-bold hover:text-red-600"
                  >
                    Home
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/"
                    className="text-white font-normal hover:text-red-600"
                  >
                    The Idea People
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white font-normal hover:text-red-600"
                  >
                    The Zero Space
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/work_portoflio"
                    className="text-white font-normal hover:text-red-600"
                    onClick={closeMenu}>
                    Work Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-white font-normal hover:text-red-600" onClick={closeMenu}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact_us"
                    className="text-white font-normal hover:text-red-600" onClick={closeMenu}
                  >
                    Contact Us
                  </Link>
                </li>
                <p>
                  <Link
                    to="/disclaimer"
                    className="text-red-500 hover:text-red-600" onClick={closeMenu}
                  >
                    LEGAL DISCLAIMER
                  </Link>
                </p>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="border-t border-red-500">
              <ul className="list-none border-primary pt-4 space-y-3 mt-4">
                <li className="font-bold text-white mb-2">Services</li>
                <li>
                  <Link
                    to="/media_advertising"
                    className="text-white font-normal hover:text-red-600" onClick={closeMenu}
                  >
                    Media & Advertising
                  </Link>
                </li>
                <li>
                  <Link
                    to="/brand_strategy"
                    className="text-white font-normal hover:text-red-600" onClick={closeMenu}
                  >
                    Brand Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design_solutions"
                    className="text-white font-normal hover:text-red-600" onClick={closeMenu}
                  >
                    Design Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/content_solutions"
                    className="text-white font-normal hover:text-red-600" onClick={closeMenu}
                  >
                    Content Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/web_development"
                    className="text-white font-normal hover:text-red-600" onClick={closeMenu}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/digital_marketing"
                    className="text-white font-normal hover:text-red-600" onClick={closeMenu}
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Ahmedabad Office */}
            <div className="border-t border-red-500">
              <ul className="list-none border-primary pt-4 space-y-3 mt-4">
                <p className="font-bold text-white">Noida</p>
                <p className="text-white font-normal">
                  Elevano Ventures Private Limited
                  <br />
                  C-79, Sector 2, F-4 Basement, Noida,
                  Gautam Buddha Nagar | 201301,
                  Uttar Pradesh
                </p>
                <p>
                  <Link
                    to="tel:+91 98211-16003"
                    className="text-white font-normal hover:text-red-600"
                  >
                    +91 98211-16003
                  </Link>
                </p>
                <p>
                  <Link
                    to="mailto:Info@elevanoventure.com"
                    className="text-white font-normal hover:text-red-600"
                  >
                    Info@elevanoventure.com
                  </Link>
                </p>
                
                <p>
                <p>
                  <strong className="text-white">Career</strong>
                </p>
                  <Link
                    to="mailto:hr@elevanoventure.com"
                    className="text-white font-normal hover:text-red-600"
                  >
                    hr@elevanoventure.com
                  </Link>
                </p>
              </ul>
            </div>

            {/* Column 4 - Mumbai Office */}
            {/* <div className="border-t border-red-500">
              <ul className="list-none border-primary pt-4 space-y-3 mt-4">
                <p className="font-bold text-white">Mumbai</p>
                <p className="text-gray-300">
                  Zero Gravity communications LLP
                  <br />
                  4th floor, Spectrum Tower, Malad (W), Mumbai | 400064
                </p>
                <p>
                  <Link
                    to="tel:+91 6358-800529"
                    className="text-white font-normal hover:text-red-600"
                  >
                    +91 6358-800529
                  </Link>
                </p>
              </ul>
            </div> */}
          </div>

          {/* Social Icons */}
          <div className="text-center mt-4 border-t border-red-500 pt-3">
            <p className="text-white text-lg mb-4"><strong>Connect</strong></p>
            <ul className="flex justify-center space-x-6 border-b border-red-500 pb-4">
              {/* <li>
                <a
                  href="https://www.instagram.com/zerogravitycommunications/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/instagram-icon.png"
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.threads.net/@zerogravitycommunications"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/thred-icon.png"
                    alt="Threads"
                    className="w-5 h-5"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zero-gravity-communictions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/linkedin-icon.png"
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                </a>
              </li> */}
              <li>
                <a href="mailto:Info@elevanoventure.com">
                  <img
                    src="https://www.zerogravitycommunications.com/wp-content/uploads/2023/10/email-icon.png"
                    alt="Email"
                    className="w-5 h-5"
                  />
                </a>
              </li>
              <li>
              <Link
                to="https://api.whatsapp.com/send/?phone=919821116003&amp;text&amp;type=phone_number&amp;app_absent=0"
                className=""
              >
                <IoLogoWhatsapp color='white' size={20}/>
              </Link>              
              </li>
              <li>
              <Link
                to="tel:+91 98211-16003"
                className=""
              >
                <LuPhone  color='white' size={20}/>
              </Link>              
              </li>                  
            </ul>
          </div>


          {/* Footer Bottom */}
          <div className="mt-4 text-center">
            <h4 className="font-bold text-white text-xl">Popular Searches</h4>
            <p className="text-white font-bold">
              Integrated Advertising Gujarat | Integrated Advertising Ahmedabad
              | Integrated Advertising India | Ad Agency in Ahmedabad | Ad
              Agency in Gujarat | Ad Agency in Mumbai | Branding Agency in India
              | Integrated Advertising Mumbai | Digital Advertising Agency
              Mumbai | Social Media Agency in Ahmedabad | Social Media Agency in
              Mumbai | Digital Marketing Agency in Mumbai | Digital Marketing
              Ahmedabad | Creative Marketing Agency in Mumbai | Creative Design
              Agency Mumbai
            </p>
          </div>

          <div className="text-center py-4 border-t border-secondary mt-4 text-white">
            ©2024 All Rights Reserved.
            <Link
              to="/"
              className="font-bold hover:underline"
            >
              Elevano Ventures Private Limited
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
