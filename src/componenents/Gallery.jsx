import React from 'react';

export default function Gallery() {
  return (
    <div id="Gallery" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 relative">
        <div className="font-secondary text-center font-bold text-[30px] flex flex-col lg:flex-row items-center justify-center">
          <h1
            className="text-blue-700 mt-5 lg:mt-0 lg:mr-3"
            data-aos="flip-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            Gallery Coming Soon
          </h1>
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <img
              src="/images/gear.gif"
              alt="Loading animation"
              className="w-16 h-16 lg:w-20 lg:h-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
