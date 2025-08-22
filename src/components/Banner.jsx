import React from "react";
import img01 from "../Assest/Banner/57503.gif";
// import img02 from "../Assest/Banner/64628.jpg";
import img03 from "../Assest/Banner/kesari.jpg";
import img04 from "../Assest/Banner/travelguru.jpg";
// import img05 from "../Assest/Banner/crescenttourandtravels.jpg";
import img06 from "../Assest/Banner/stylevistas.jpg";
// import img07 from "../Assest/Banner/bstourandtravels.jpg";
import img08 from "../Assest/Banner/bcdtravel.jpg";
import img09 from "../Assest/Banner/expediagroup.jpg";
// import img10 from "../Assest/Banner/easymytrip.jpg";
import img11 from "../Assest/Banner/bindas.jpg";
const Banner = () => {
  const companies = [
    // {
    //   img: "/Banner/57503.gif",
    //   title: "Expedia Group",
    //   website: "www.expediagroup.com",
    //   bgColor: "#dbe4ff",
    // },
    // {
    //   img:img01,
    //   title: "Ixigo-Group",
    //   website: "www.ixigo.com",
    //   bgColor: "#fb5607",
    // },
    // {
    //   img: img02,
    //   title: "Kesari",
    //   email: "holiday@kesari.in",
    //   website: "www.kesari.in",
    //   bgColor: "#ffffff",
    //   textColor: "#000",
    // },
    {
      img: img03,
      title: "Travelguru",
      email: "service@travelguru.com",
      website: "www.travelguru.com",
      bgColor: "#003566",
    },
    {
      img: img04,
      title: "Crescent Tour and Travels",
      website: "www.kesari.com",
      bgColor: "#dbe4ff",
    },
    // // {
    //   img: img05,
    //   title: "Style Vistas",
    //   website: "www.kesari.com",
    //   bgColor: "#dbe4ff",
    // },
    {
      img: img06,
      title: "BS Tours & Travels",
      website: "www.bstoursandtravels.com",
      bgColor: "#000000",
    },
    // // {
    //   img: img07,
    //   title: "BCD Travel",
    //   subtitle: "Travel smart. Achieve more.",
    //   bgColor: "#ffffff",
    // },
    {
      img: img08,
      title: "Expedia Travel",
      subtitle: "Travel smart. Achieve more.",
      bgColor: "#ffffff",
    },
    {
      img: img09,
      title: "Expediagroup",
      website: "www.expediagroup.com",
      bgColor: "#e5e5e5",
      textColor: "#000",
    },
    // {
    //   img: img10,
    //   title: "Easymytrip",
    //   website: "www.easymytrip.com",
    //   bgColor: "#e5e5e5",
    //   textColor: "#000",
    // },
    {
      img: img11,
      title: "Bindas",
      website: "www.bindas.com",
      bgColor: "#dbe4ff",
    },
    // {
    //   img: "/Banner/CWT.jpg",
    //   title: "Carlson Wagonlit Travel",
    //   website: "www.mycwt.com",
    //   bgColor: "#dbe4ff",
    // },
    // {
    //   img: "/Banner/enchanting.jpg",
    //   title: "Enchanting Madhya Pradesh",
    //   website: "www.enchantingmadhyapradesh.com",
    //   bgColor: "#dbe4ff",
    // },
    // {
    //   img: "/Banner/toptripholidays.jpg",
    //   title: "Top-Trip-Holidays",
    //   website: "www.toptripholidays.com",
    //   bgColor: "#dbe4ff",
    // },
    // Add more companies as needed
  ];

  const Card = ({ data }) => (
    <div className="flex-shrink-0 w-72 h-40 border-2 border-dashed border-gray-500 rounded-lg overflow-hidden flex items-center justify-center bg-white">
      {data.img && (
        <img
          src={data.img}
          alt={data.title}
          className="max-w-[150px] max-h-[125px] object-contain transition-transform duration-300 hover:scale-125"
          loading="lazy"
        />
      )}
    </div>
  );

  return (
    <div className="py-12 bg-gray-100">
      {/* First Row - Scroll Left */}
      <div className="relative py-0 overflow-hidden ml-[47px] mr-[47px]">
        <div className="flex animate-marquee gap-3">
          {[...companies, ...companies].map((company, index) => (
            <Card key={`first-${index}`} data={company} />
          ))}
        </div>
      </div>

      {/* Second Row - Scroll Right */}
      <div className="relative py-6 overflow-hidden mr-[47px] ml-[47px]">
        <div className="flex animate-marquee-reverse gap-3">
          {[...companies, ...companies].map((company, index) => (
            <Card key={`second-${index}`} data={company} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
