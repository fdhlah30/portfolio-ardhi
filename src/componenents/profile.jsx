import React from 'react'

export default function Profile() {
  return (
<div id="profile" className="section">
  <div className="container mx-auto max-w-[1200px] p-10 overflow-hidden">
    <div className="font-secondary text-center font-bold mb-12n text-[30px]">
      <h1 className="text-blue-700 mb-3">About My Self</h1>
    </div>
    <div className="flex flex-col lg:flex-row items-start justify-between">
      <div className="text-center w-full max-w-[400px] mx-auto mb-[30px]">
        <div className="max-w-[300px] max-h-[300px] bg-gradient pt-[10px] rounded-full overflow-hidden mx-auto mt-12">
          <img src="/images/ardhi.png" alt="ardhi" className="mx-auto h-80" />
        </div>
      </div>
        <h2 className="text-gradient text-[30px] mt-[10px]">Fadhilah Ardhiansyah</h2>
      <div className="w-full lg:pt-[50px] lg:ml-[30px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          
      </div>
      </div>
    </div>
  </div>
</div>
  )
}

