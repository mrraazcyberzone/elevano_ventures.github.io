import { useState } from "react";
import { Link } from "react-router-dom";
import "../header/Header.css";
import { IoMenu  } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import logoImage from '../assert/logo_company.png';




function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    window.scrollTo(0, 0);
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
  };

  const closeMenu = () => {
    setServicesMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="navbar bg-white shadow-md sticky top-0 z-50 hidden lg:block pb-1">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="text-black font-bold text-xl"  onClick={() => {
                        closeMenu();                        
                      }}>
          <img 
            src={logoImage} 
            alt="Elevano Ventures Private Limited" 
            className="h-16 transform transition-transform duration-300 hover:scale-150" 
          />
          </Link>
          <div>
            <ul className="flex lg:space-x-6 space-y-4 lg:space-y-0">
              <li>
                <Link to="/work_portoflio" className="text-gray-700 hover:text-gray-900"  onClick={() => {
                        closeMenu();                        
                      }}>
                  Work Portfolio
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleServicesMenu}
                  className="text-gray-700 hover:text-gray-900 flex items-center"
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform ${isServicesMenuOpen ? "transform rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <ul
                  className={`absolute left-0 w-screen mt-2 bg-white shadow-lg rounded-md ${
                    isServicesMenuOpen ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <Link
                      to="/media_advertising"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100" 
                      onClick={() => {
                        closeMenu();                        
                      }}
                    >
                      Media & Advertising
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/brand_strategy"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        closeMenu();                        
                      }}>
                      Brand Strategy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/design_solutions"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        closeMenu();                        
                      }}>
                      Design Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/content_solutions"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        closeMenu();                        
                      }} >
                      Content Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/web_development"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        closeMenu();                        
                      }}>
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/digital_marketing"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        closeMenu();                        
                      }}>
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li>
                <Link to="/news_views" className="text-gray-700 hover:text-gray-900">
                  News & Views
                </Link>
              </li>
              <li>
                <Link to="/awards" className="text-gray-700 hover:text-gray-900">
                  Awards
                </Link>
              </li> */}
              <li>
                <Link to="/careers" className="text-gray-700 hover:text-gray-900"  onClick={() => {
                        closeMenu();                        
                      }}>
                  Careers
                </Link>
              </li>
              {/* <li>
                <Link to="/the_idea_people" className="text-gray-700 hover:text-gray-900">
                  The Idea People
                </Link>
              </li> */}
              <li>
                <Link to="/contact_us" className="text-gray-700 hover:text-gray-900"  onClick={() => {
                        closeMenu();                        
                      }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="w-full min-h-12 bg-white shadow-md lg:hidden flex justify-center items-center">
      <IoMenu onClick={toggleMobileMenu} className="fixed top-2 left-1" size={32}/>
      <Link to="/" className="text-black font-bold text-xl"  onClick={closeMenu}>
          <img 
            src={logoImage} 
            alt="Elevano Ventures Private Limited" 
            className="h-16 transform transition-transform duration-300 hover:scale-150" 
          />
          </Link>      
      </nav>

      <div
  className={`${
    isMobileMenuOpen ? 'w-[200px]' : 'w-0'
  } h-[100vh] bg-white fixed top-0 left-0 z-50 overflow-hidden transition-width duration-300 ease-in-out shadow-lg`}
>
  <div className="w-full">
    <div className="flex justify-end">
    <MdOutlineClose color="#666" className="font-extrabold" onClick={toggleMobileMenu} size={30}/>
    </div>
   

    
    <ul className="flex flex-col gap-5">
              <li className="px-5">
                <Link to="/work_portoflio" className="text-gray-700 hover:text-gray-900" onClick={toggleMobileMenu}>
                  Work Portfolio
                </Link>
              </li>
              <li className={`relative w-full px-5  ${isServicesMenuOpen?'bg-[#666] text-white' : ''}`} >
                <div className="flex justify-between items-center" onClick={toggleServicesMenu}>
                <button                  
                  className={`flex items-center`}
                >
                  Services
                </button>
                <RiArrowDropDownLine color={isServicesMenuOpen?'white' : "black"}  size={40}/>

                </div>
                <ul
                  className={`absolute left-0 w-screen mt-2 bg-white shadow-lg rounded-md ${
                    isServicesMenuOpen ? "block" : "hidden"
                  }`}
                >
                  <li className="px-5">
                    <Link
                      to="/media_advertising"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}
                    >
                      Media & Advertising
                    </Link>
                  </li>
                  <li className="px-5">
                    <Link
                      to="/brand_strategy"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}
                    >
                      Brand Strategy
                    </Link>
                  </li>
                  <li className="px-5">
                    <Link
                      to="/design_solutions"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}
                    >
                      Design Solutions
                    </Link>
                  </li>
                  <li className="px-5">
                    <Link
                      to="/content_solutions"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}
                    >
                      Content Solutions
                    </Link>
                  </li>
                  <li className="px-5">
                    <Link
                      to="/web_development"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li className="px-5">
                    <Link
                      to="/digital_marketing"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="px-5">
                <Link to="/news_views" className="text-gray-700 hover:text-gray-900">
                  News & Views
                </Link>
              </li>
              <li className="px-5">
                <Link to="/awards" className="text-gray-700 hover:text-gray-900">
                  Awards
                </Link>
              </li> */}
              <li className="px-5">
                <Link to="/careers" className="text-gray-700 hover:text-gray-900" onClick={toggleMobileMenu}>
                  Careers
                </Link>
              </li>
              {/* <li className="px-5">
                <Link to="/the_idea_people" className="text-gray-700 hover:text-gray-900">
                  The Idea People
                </Link>
              </li> */}
              <li className="px-5">
                <Link to="/contact_us" className="text-gray-700 hover:text-gray-900" onClick={toggleMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul> 
    
    
  </div>
</div>
    </>
  );
}

export default Header;
