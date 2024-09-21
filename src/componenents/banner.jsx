import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Banner() {
  return (
    <div id="home" className="section container mx-auto max-w-[1200px] px-3 items-center">
      <div className="w-full">
        <div className="block text-center font-secondary font-black text-[25px]">
          Hello I am
          <div>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Frontend Developer',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        'PHP Developer',
        3000,
        'IT Support',
        3000,
        'Laravel Developer',
        3000
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="ml-3 text-[30px] text-blue-700"/>
      </div>
    </div>
    <div className="italic max-w-[750px] text-center mx-auto mt-5 text-[18px]"
    data-aos="fade-up" 
    data-aos-easing="ease-in-sine"
    data-aos-duration="500"
    data-aos-delay="300">
      Bachelor's graduate in Information Systems from Universitas Bina Sarana Informatika. He has strong skills in computer operation, Wireless LAN installation and configuration, local network cabling,internet network setup, as well as proficiency in HTML, MySQL, Tailwind CSS, PHP Frameworks Laravel, GitHub, and Jira.</div>
    </div>
    </div>
  )
}

