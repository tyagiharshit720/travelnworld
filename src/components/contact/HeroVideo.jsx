// import React from 'react';

// const HeroVideo = () => {
//   return (
//     // <video
//     //   autoPlay
//     //   loop
//     //   muted
//     //   playsInline
//     //   className="w-full md:h-[80vh] object-cover"
//     // >
//     //   <source src="../../Assest/AboutVideos/contact.mp4" type="video/mp4" />
//     //   Your browser does not support the video tag.
//     // </video>
    
//   );
// };

// export default HeroVideo;

import contact from "../../Assest/AboutVideos/contact.mp4"; // adjust the path if needed
 
const HeroVideo = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={contact} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideo;

