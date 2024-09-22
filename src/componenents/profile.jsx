import React from 'react'

export default function Profile() {
  return (
<div id="profile" className="section">
  <div className="container mx-auto max-w-[1200px] p-10 overflow-hidden mt-28">
    <div className="font-secondary text-center font-bold mb-12 text-[30px]">
      <h1 className="text-blue-700 mb-3"
          data-aos="flip-down" 
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="300">About My Self</h1>
    </div>
    <div className="flex flex-col lg:flex-row items-start justify-between">
      <div className="text-center w-full max-w-[400px] mx-auto mb-[30px]">
        <div className="max-w-[300px] max-h-[300px] bg-gradient pt-[10px] rounded-full overflow-hidden mx-auto mt-12" 
          data-aos="zoom-in" 
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="300">
          <img src="/images/ardhi.png" alt="ardhi" className="mx-auto h-80" 
          data-aos="zoom-in" 
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="300"/>
        </div>
      </div>
      <div className="w-full lg:pt-[50px] lg:ml-[30px]">
        <h2 className="text-gradient text-[25px] mt-[10px]"
             data-aos="fade-left" 
             data-aos-easing="ease-in-sine"
             data-aos-duration="500"
             data-aos-delay="300"
             >Fadhilah Ardhiansyah</h2>
            <p className="text-[18px] mt-[8px] text-left-[0] text-right-[0]" 
            data-aos="fade-left" 
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="300">I am Fadhilah Ardhiansyah, 22 years old, Bachelor's graduate in Information Systems from Universitas Bina Sarana Informatika, my religion is Islam, I am the first child of 2 siblings, I like the hobbies of pencak silat and music. Every day I practice pencak silat and play music. I am a person who has a strong determination to progress, disciplined, honest, agile, thorough, able to work together with teams and individuals. advantages: I can operate a computer, Install and configure Wireless LAN networks, Install and configure local network cables, install and configure internet networks, understand HTML, MySql, Tailwind CSS, PHP Frameworks Laravel, Github, Jira</p>
      </div>
    </div>
  </div>
</div>
  )
}

