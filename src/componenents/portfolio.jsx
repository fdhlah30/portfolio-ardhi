import React, { useState } from 'react';

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 pt-[100px] mt-[50px]">
        <div className="flex flex-col lg:align-center lg:flex-row justify-center mb-[50px]">
          <div className="order-2 lg:order-1 mt-5 text-center"
          data-aos="zoom-in" 
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
          data-aos-delay="500">
            <h4 className="text-blue-700 font-secondary text-[24px] font-bold mb-1">
              Recent Work
            </h4>
            <div className="text-black italic font-primary max-w-[700px] mx-auto text-[18px]">
            We recently completed a groundbreaking project, delivering an innovative web solution that integrates seamless user experiences and cutting-edge technology. This project highlights our expertise in modern web development, delivering fast, secure, and responsive applications.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center">
        <div className="w-full" 
            data-aos="flip-left" 
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="1000">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img src="/images/project1.png" alt="Digilib (Digital Library)"/>
              <div className="p-5">
                <h4 className="text-blue-700 text-lg font-bold mb-2">Digilib (Digital Library)</h4>
                <p className="text-gray-600">Digital Member Registration and Guestbook Information System</p>
                <button 
                  className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  onClick={openModal}>
                  View Details
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-5 max-w-lg w-full">
              <h2 className="text-xl font-bold mb-2">Project Details</h2>
              <p className="text-gray-700 mb-4">
              This system is designed to improve services at the Rimba Baca Library, making it easier for both admins and users to meet their needs. The system development method used in this design involves the PHP programming language, with the Laravel framework and Flowbite. For the database, MySQL is used.
              </p>
              <button 
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
           )}
        </div>
        </div>
      </div>
      
  )
}

