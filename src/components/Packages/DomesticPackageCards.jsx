import React from 'react';
import { useNavigate, Routes, Route, useParams, Link } from 'react-router-dom';
import PackageCardDetail from './PackageCardDetails';
import Navbar from '../Navbar';
import Footer from '../Footer';
// Destinations data
const destinations = [
  {
    id: 1,
    title: "Goa",
    slug: "goa",
    image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
  },
  {
    id: 2,
    title: "Andaman",
    slug: "andaman",
    image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
  },
  {
    id: 3,
    title: "Tamilnadu",
    slug: "tamilnadu",
    image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
  },
];

// Package data
const destinationPackages = {
  goa: [
    {
      id: 1,
      title: "Goa Beach Paradise Package",
      duration: "5 days & 4 nights",
      image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
      price: "₹12,999",
      rating: "4.5",
      reviews: "24",
    },
    {
      id: 2,
      title: "Goa Adventure Package",
      duration: "4 days & 3 nights",
      image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
      price: "₹10,999",
      rating: "4.2",
      reviews: "18",
    },
  ],
  andaman: [
    {
      id: 1,
      title: "Andaman Beach Paradise Package",
      duration: "5 days & 4 nights",
      image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
      price: "₹15,999",
      rating: "4.7",
      reviews: "32",
    },
  ],
  tamilnadu: [
    {
      id: 1,
      title: "Tamilnadu Cultural Package",
      duration: "6 days & 5 nights",
      image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
      price: "₹13,999",
      rating: "4.3",
      reviews: "21",
    },
  ],
};

// Destination Card Component
const DestinationCard = ({ title, image, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(slug); // Relative navigation
  };

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

// Destination Packages Component
const DestinationPackages = () => {
  const { slug } = useParams();
  const packages = destinationPackages[slug] || [];
  const destination = destinations.find(dest => dest.slug === slug);

  if (!destination) {
    return <div className="text-center py-12">Destination not found</div>;
  }

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <button 
        onClick={() => window.history.back()} 
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back to Destinations
      </button>
      
      <h1 className="text-3xl font-bold text-center mb-8">{destination.title} Packages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{pkg.title}</h2>
              <p className="text-gray-600">{pkg.duration}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">★ {pkg.rating}</span>
                <span className="text-gray-500 ml-2">({pkg.reviews} reviews)</span>
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold">₹{pkg.price}</span>
              </div>
              <Link
                to={`${pkg.id}`}
                className="mt-4 w-full block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Domestic Destinations Component
const DomesticDestinations = () => {
  return (
    <div>
      <Navbar/>
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-red-600">Domestic Destinations</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <DestinationCard 
            key={dest.id} 
            title={dest.title} 
            image={dest.image} 
            slug={dest.slug} 
          />
        ))}
      </div>

      </div>
<Footer/>
    </div>
  );
};

// Main Routing Component
const DomesticPackageCards = () => {
  return (
    <Routes>
      <Route index element={<DomesticDestinations />} />
      <Route path=":slug" element={<DestinationPackages />} />
      <Route path=":slug/:packageId" element={<PackageCardDetail />} />
    </Routes>
  );
};

export default DomesticPackageCards;