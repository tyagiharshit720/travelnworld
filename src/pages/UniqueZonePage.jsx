import React, { useState } from "react";
import Swal from "sweetalert2";
import Video from '../Assest/hero1 (1).mp4';
import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import video from "../../public/hero1.mp4";
import {
  FaUsers,
  FaSuitcase,
  FaMapMarkerAlt,
  FaChartBar,
  FaUserCircle,
  FaClipboardList,
  FaDesktop,
  FaShareAlt,
  FaGlobe,
  FaArrowUp,
  FaFileAlt,
  FaLightbulb,
  FaEnvelope,
  FaHandshake,
} from "react-icons/fa";
 
// Swiper for testimonials
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 
const businessTypes = [
  "Travel Agent",
  "Tour Operator",
  "Hotel / Resort",
  "Transport Service",
  "Guide",
  "Other",
];
 
 
const testimonials = [
  {
    text: "I really wish to make the best of my holidays this year with you guys.",
    name: "Amit Sharma",
    location: "Delhi, India",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Very good service provided for us.",
    name: "Sarah Johnson",
    location: "New York, USA",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    text: "I am using tour travel services and my first experience is awesome. Very nice.",
    name: "Rohit Mehta",
    location: "Mumbai, India",
    img: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    text: "Everything was well planned and executed. Truly satisfied!",
    name: "Emily Brown",
    location: "London, UK",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    text: "Professional service, had a smooth experience throughout.",
    name: "David Lee",
    location: "Singapore",
    img: "https://randomuser.me/api/portraits/men/71.jpg",
  },
];
 
const UniqueZonePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company_name: "",
    business_type: "",
    agree: false,
  });
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      Swal.fire("Error", "Please agree to the Terms & Conditions", "error");
      return;
    }
    console.log(formData);
    Swal.fire({
      icon: "success",
      title: "Submitted!",
      text: "Your request has been submitted.",
    });
 
};
 
  return (
    <>
    <div>
        <Navbar/>
      {/* Video Section with Form */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src={Video}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-black opacity-40"></div>
 
        {/* Form */}
        <div className="relative z-10 flex items-start justify-end h-full px-10 pt-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-[25%] max-w-sm"
          >
            <h2 className="text-lg font-bold text-red-600 text-center">
              List Your Company FREE
            </h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              & Expand Your Business Quickly!
            </p>
 
            <div className="grid grid-cols-1 gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
 
              <div className="flex">
                <span className="px-3 py-2 border border-gray-300 bg-gray-100 text-sm text-gray-700">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Mobile No"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value.replace(/\D/g, "").slice(0, 15),
                    })
                  }
                  required
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r"
                />
              </div>
 
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email ID"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
 
              <input
                type="text"
                name="company_name"
                placeholder="Enter Company Name"
                value={formData.company_name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
 
              <select
                name="business_type"
                value={formData.business_type}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded bg-white"
              >
                <option value="">Select Business Type</option>
                {businessTypes.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
 
              <label className="flex items-start text-xs text-gray-600">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
 
   className="mr-2 mt-1"
                />
                Yes, I agree to all the{" "}
                <a href="/terms" className="text-blue-600 underline mx-1">
                  Terms & Conditions
                </a>
                ,
                <a href="/privacy" className="text-blue-600 underline ml-1">
                  Privacy Policy
                </a>
                .
              </label>
 
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded mt-2 hover:bg-blue-700 transition"
              >
                Join For Free
              </button>
            </div>
          </form>
        </div>
      </div>
 
      {/* Stats Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-2xl font-bold mb-10">
          How You <span className="text-blue-600">Grow with travelnworld.com</span>
        </h2>
 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div>
            <FaUsers className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">50000+</h3>
            <p className="text-gray-600">Monthly Travel Leads/Enquiries</p>
          </div>
 
          <div>
            <FaSuitcase className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">80000+</h3>
            <p className="text-gray-600">Travel Packages</p>
          </div>
 
          <div>
            <FaMapMarkerAlt className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">2500+</h3>
            <p className="text-gray-600">Destinations</p>
          </div>
 
          <div>
            <FaChartBar className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Free Agent Panel</h3>
            <p className="text-gray-600">(Lead Management Panel)</p>
          </div>
        </div>
 
        <button className="mt-10 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Join For Free
        </button>
 
        <h3 className="mt-10 text-xl font-bold">
          1200+ <span className="text-blue-600">Trusted Agents</span>
        </h3>
      </section>
 
      {/* Steps Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-2xl font-bold mb-12">
          How You <span className="text-blue-600">Grow with travelnworld.com</span>
        </h2>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* same steps content */}
          <div>
            <FaUserCircle className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Create Agent Profile</h3>
            <p className="text-gray-600">Add Basic Details & Register In 2 Minutes</p>
          </div>
          <div>
            <FaClipboardList className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Listing Dashboard</h3>
            <p className="text-gray-600">Manage Your Listings Effectively</p>
          </div>
          <div>
            <FaDesktop className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Access Own Dashboard</h3>
            <p className="text-gray-600">Monitor Your Activities Seamlessly</p>
          </div>
          <div>
            <FaShareAlt className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Integrate Social Media</h3>
            <p className="text-gray-600">Connect Easily With Your Audience</p>
          </div>
          <div>
            <FaGlobe className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">SMO With Social Links</h3>
            <p className="text-gray-600">Optimize Your Social Media Presence</p>
          </div>
          <div>
            <FaArrowUp className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Daily Boosting</h3>
            <p className="text-gray-600">Boost Your Content Daily for Growth</p>
          </div>
          <div>
            <FaFileAlt className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Unlimited Itinerary Posting</h3>
            <p className="text-gray-600">Post Unlimited Travel Itineraries</p>
          </div>
          <div>
            <FaLightbulb className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Business Ideas</h3>
            <p className="text-gray-600">Receive Guidance To Expand Your Business</p>
          </div>
          <div>
            <FaEnvelope className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Receive Inbounded Leads</h3>
            <p className="text-gray-600">Get Leads Delivered Directly to You</p>
          </div>
          <div>
            <FaHandshake className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Sell Travel Packages</h3>
            <p className="text-gray-600">Get In Touch With Travelers for Increased Sales</p>
          </div>
          <div>
            <FaChartBar className="text-gray-700 text-5xl mx-auto mb-3" />
            <h3 className="font-bold text-lg">Build Your Business Growth</h3>
            <p className="text-gray-600">Expand Your Business with Us</p>
          </div>
        </div>
 
        <button className="mt-12 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Join For Free
        </button>
      </section>
 
      {/* ✅ Testimonials Section Added */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Client <span className="text-blue-600 font-bold">Testimonials</span>
          </h2>
 
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md text-gray-700 px-6 py-8 rounded-2xl flex flex-col items-center justify-center">
                  <FaQuoteRight className="text-4xl text-blue-600 mb-4" />
                  <p className="italic mb-6 text-gray-600">"{item.text}"</p>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 mb-3"
                  />
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </section>
      <Footer/>
      </div>
    </>
  );
};
 
export default UniqueZonePage;
 
 