import React from 'react'

export default function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
        <div className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]">
          <div className="order-2 lg:order-1 mt-5">
            <h4 className="text-blue-700 font-secondary text-[24px] font-bold mb-1">
              Recent Work
            </h4>
            <div className="text-black italic font-primary max-w-[700px] mx-auto text-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste vitae natus maiores asperiores voluptatem doloremque.
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center mt-5">
            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[50px]">01</h2>
            <div className="text-black font-bold">Complete Project</div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center">
          <div className="w-full">
            <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/project1.png" alt=""/>
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                  <div className="bg-white rounded-full px-5 inline-block mb-2">
                    <h4 className="text-gradient">
                      Digilib (Digital library)
                    </h4>
                  </div>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

