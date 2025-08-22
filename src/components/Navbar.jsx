

// // export default Navbar;

// import React, { useState } from "react";
// import logo from "/src/Assest/logo.png";
// // import { navbarLinks } from "../constants/NavbarLinks";
// // import { Link } from 'lucide-react';
// import { Link, useNavigate } from "react-router-dom";
// import { Navigation } from "lucide-react";
// import TripPlannerForm from "./TripPlannerForm";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigation = useNavigate();
//   const [showEnquiryForm, setShowEnquiryForm] = useState(false);

//   return (
//     <div className="flex flex-col sm:flex-row items-center gap-4 justify-between sticky top-0 z-20 shadow-xl ">
//      {showEnquiryForm && (
//         <TripPlannerForm onClose={() => setShowEnquiryForm(false)} />
//       )}
//       <header className="bg-white px-2 py-3 z-[70] w-full sticky top-0">
//         <nav className="flex justify-between items-center mx-auto relative">
//           <a href="/">
//             <div className="z-50">
//               <img className="w-20 cursor-pointer ml-4" src={logo} alt="Logo" />
//             </div>
//           </a>

//           {/* Nav Links */}
//           <div
//             className={`duration-300 lg:static absolute bg-white left-0 top-[60px] lg:w-auto w-full flex items-center px-5 lg:px-0 ${
//               isOpen ? "block" : "hidden"
//             } lg:flex`}
//           >
//             <ul className="flex font-medium py-3 lg:flex-row flex-col lg:items-center gap-6 w-full lg:w-auto items-center justify-center">
//               <li>
//                 <Link
//                   className="hover:text-[#eb6734] text-base font-semibold"  
//                   to="/"
//                 >
//                   Home
//                 </Link>
//               </li>

//               <li> 
//                 <Link
//                   to="/about-us"
//                   className="hover:text-[#eb6734] text-base font-semibold"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="hover:text-[#eb6734] text-base font-semibold cursor-pointer"
//                   to="/packages"
//                 >
//                   Packages
//                 </Link>
//               </li>
//               <li className="relative group cursor-pointer">
//                 {" "}
//                 {/* Added cursor-pointer here */}
//                 <Link
//                   className="hover:text-[#eb6734] text-base font-semibold cursor-pointer flex items-center"
//                   to="/destination"
//                 >
//                   Destination
//                   {/* Optional dropdown icon */}
//                   <svg
//                     className="ml-1 h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </Link>
//                 {/* Dropdown with transition */}
//                 <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                   <li>
//                     <Link
//                       className="block px-4 py-2 hover:bg-[#eb6734] hover:text-white text-base font-semibold rounded-t-md"
//                       to="/destination/domestic"
//                     >
//                       Domestic
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       className="block px-4 py-2 hover:bg-[#eb6734] hover:text-white text-base font-semibold rounded-b-md"
//                       to="/destination/international"
//                     >
//                       International
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               <li>
//                 <Link
//                   className="hover:text-[#eb6734] text-base font-semibold"
//                   to="/Blogs"
//                 >
//                   Blogs
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="hover:text-[#eb6734] text-base font-semibold"
//                   to="/testimonials"
//                 >
//                   Testimonials
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="hover:text-[#eb6734] text-base font-semibold"
//                   to="/B2bLogin"
//                 >
//                   B2B Login
//                 </Link>
//               </li>
//               <li>
//                 <Link
//               className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
//               to="/contact"
//             >
//               Contact
//             </Link>
//               </li>
              
//               <Link class="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-4 py-2 rounded-md" to="/unique-zone" target="">Unique Zone</Link>
//          <button
//         onClick={() => setShowEnquiryForm(true)}
//         className="bg-[#163263] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#3d71cc] text-xl"
//       >
//         Trip Planners
//       </button>
//       <li>
//         <button class="bg-[#071835] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#1a2f53] text-xl relative">Trip ideas</button>
//       </li>
//               {/* <li className="lg:hidden"><a className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700" href="/contact">Contact</a></li> */}
//             </ul>
//           </div>

//           {/* Desktop Contact Button */}
//           {/* <div className="hidden lg:flex items-center">
//             <Link
//               className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
//               to="/contact"
//             >
//               Contact
//             </Link>
//           </div> */}

//           {/* Hamburger Button */}
//           <div
//             className="text-3xl cursor-pointer lg:hidden z-50 px-4"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? (
//               <svg
//                 className="h-8 w-8"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-8 w-8"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import logo from "/src/Assest/logo.png";
import { Link, useNavigate } from "react-router-dom";
import TripPlannerForm from "./TripPlannerForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  // ✅ Handle Trip Planner Click
  const handleTripPlannerClick = () => {
    setIsOpen(false);          // close navbar menu if mobile
    setShowEnquiryForm(true);  // open form
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-between sticky top-0 z-20 shadow-xl ">
      {/* Trip Form Modal */}
      {showEnquiryForm && (
        <TripPlannerForm onClose={() => setShowEnquiryForm(false)} />
      )}

      <header className="bg-white px-2 py-3 z-[70] w-full sticky top-0">
        <nav className="flex justify-between items-center mx-auto relative">
          <a href="/">
            <div className="z-50">
              <img className="w-20 cursor-pointer ml-4" src={logo} alt="Logo" />
            </div>
          </a>

          {/* Nav Links */}
          <div
            className={`duration-300 lg:static absolute bg-white left-0 top-[60px] lg:w-auto w-full flex items-center px-5 lg:px-0 ${
              isOpen ? "block" : "hidden"
            } lg:flex`}
          >
            <ul className="flex font-medium py-3 lg:flex-row flex-col lg:items-center gap-6 w-full lg:w-auto items-center justify-center">
              <li>
                <Link
                  className="hover:text-[#eb6734] text-base font-semibold"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-[#eb6734] text-base font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#eb6734] text-base font-semibold cursor-pointer"
                  to="/packages"
                >
                  Packages
                </Link>
              </li>
              <li className="relative group cursor-pointer">
                <Link
                  className="hover:text-[#eb6734] text-base font-semibold cursor-pointer flex items-center"
                  to="/destination"
                >
                  Destination
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-[#eb6734] hover:text-white text-base font-semibold rounded-t-md"
                      to="/destination/domestic"
                    >
                      Domestic
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-[#eb6734] hover:text-white text-base font-semibold rounded-b-md"
                      to="/destination/international"
                    >
                      International
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  className="hover:text-[#eb6734] text-base font-semibold"
                  to="/Blogs"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#eb6734] text-base font-semibold"
                  to="/testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#eb6734] text-base font-semibold"
                  to="/B2bLogin"
                >
                  B2B Login
                </Link>
              </li>
              <li>
                <Link
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>

              {/* Unique Zone */}
              <Link
                className="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-4 py-2 rounded-md"
                to="/unique-zone"
              >
                Unique Zone
              </Link>

              {/* ✅ Trip Planner Button */}
              <button
                onClick={handleTripPlannerClick}
                className="bg-[#163263] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#3d71cc] text-xl"
              >
                Trip Planners
              </button>

              <li>
                <button className="bg-[#071835] flex items-center gap-1 justify-center text-white px-4 py-2 rounded-xl hover:bg-[#1a2f53] text-xl relative">
                  Trip ideas
                </button>
              </li>
            </ul>
          </div>

          {/* Hamburger */}
          <div
            className="text-3xl cursor-pointer lg:hidden z-50 px-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

