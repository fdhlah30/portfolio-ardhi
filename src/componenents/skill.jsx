import React from 'react'

export default function Skill() {
  return (
    <div id="skill" className="section">
  <div className="container mx-auto max-w-[1200px] p-10 overflow-hidden mt-20">
    <div className="font-secondary text-center font-bold mb-12 text-[30px]">
      <h1 className="text-blue-700 mb-8">Skill</h1> {/* Judul Awesome Skill */}
    </div>

    <div className="w-full lg:pt-[20px] lg:ml-[30px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center ">
        {/* Item Laravel */}
        <div className="w-full">
          <div className="bg-white w-48 h-48 justify-center items-center flex rounded-lg overflow-hidden relative p-5 group"> {/* Ukuran kotak */}
            <img src="/images/laravel2.png" alt="Laravel" /> {/* Ukuran gambar */}
            <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                  <h4 className="text-gradient">Laravel</h4>
                </div>
                <p>Middle Laravel 11</p>
              </div>
            </div>
          </div>
        </div>

        {/* Item Bootstrap */}
        <div className="w-full">
          <div className="bg-white w-48 h-48 justify-center items-center flex rounded-lg overflow-hidden relative p-5 group"> {/* Ukuran kotak */}
            <img src="/images/2.png" alt="Bootstrap" /> {/* Ukuran gambar */}
            <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                  <h4 className="text-gradient">Bootstrap</h4>
                </div>
                <p>Middle Bootstrap 5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Item CSS */}
        <div className="w-full">
          <div className="bg-white w-48 h-48 justify-center items-center flex rounded-lg overflow-hidden relative p-5 group"> {/* Ukuran kotak */}
            <img src="/images/3.png" alt="CSS" /> {/* Ukuran gambar */}
            <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                  <h4 className="text-gradient">CSS</h4>
                </div>
                <p>Middle CSS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Item HTML */}
        <div className="w-full">
          <div className="bg-white w-48 h-48 justify-center items-center flex rounded-lg overflow-hidden relative p-5 group"> {/* Ukuran kotak */}
            <img src="/images/4.png" alt="HTML" /> {/* Ukuran gambar */}
            <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                  <h4 className="text-gradient">HTML</h4>
                </div>
                <p>Advanced HTML</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white w-48 h-48 justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
            <img src="/images/tailwind.png" alt="HTML" />
            <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                  <h4 className="text-gradient">Tailwind</h4>
                </div>
                <p>Middle Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white w-48 h-48 justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
            <img src="/images/jira.png" alt="HTML" />
            <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                  <h4 className="text-gradient">Jira</h4>
                </div>
                <p>Beginner Jira</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white w-48 h-48 justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
            <img src="/logo192.png" alt="ReactJs" />
            <div className="absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                  <h4 className="text-gradient">ReactJs</h4>
                </div>
                <p>Beginner ReactJs</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

  )
}

