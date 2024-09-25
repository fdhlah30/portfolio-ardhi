import React from 'react';

export default function Skill() {
  return (
    <div id="skill" className="section">
      <div className="container mx-auto max-w-[1200px] p-4 lg:p-10 overflow-hidden mt-20">
        <div className="font-secondary text-center font-bold mb-12 text-[24px] lg:text-[30px]"
          data-aos="flip-down" 
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="300">
          <h1 className="text-blue-700 mb-8">Skill</h1>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center justify-center">
            {/* Skill Items */}
            <SkillItem imgSrc="/images/laravel2.png" title="Laravel" level="Middle Laravel 11" />
            <SkillItem imgSrc="/images/2.png" title="Bootstrap" level="Middle Bootstrap 5" />
            <SkillItem imgSrc="/images/3.png" title="CSS" level="Middle CSS" />
            <SkillItem imgSrc="/images/4.png" title="HTML" level="Advanced HTML" />
            <SkillItem imgSrc="/images/tailwind.png" title="Tailwind" level="Middle Tailwind CSS" />
            <SkillItem imgSrc="/images/jira.png" title="Jira" level="Beginner Jira" />
            <SkillItem imgSrc="/logo192.png" title="ReactJs" level="Beginner ReactJs" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillItem({ imgSrc, title, level }) {
  return (
    <div className="w-full"
      data-aos="fade-right" 
      data-aos-easing="ease-in-sine"
      data-aos-duration="500"
      data-aos-delay="300">
      <div className="bg-white w-36 sm:w-44 lg:w-48 h-36 sm:h-44 lg:h-48 justify-center items-center flex rounded-lg overflow-hidden relative p-5 group
        md:mb-4 mb-6"> {/* Tambahkan margin bottom di mobile */}
        <img src={imgSrc} alt={title} />
        <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
          <div className="text-center w-full text-white">
            <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
              <h4 className="text-gradient">{title}</h4>
            </div>
            <p>{level}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
