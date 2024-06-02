import React from 'react';

function Visitor_header() {
  return (
    <div className="Main_container flex gap-5 justify-between max-md:flex-wrap items-center px-5 py-3 bg-white shadow-md">
      <div className="image">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/64703352de6adfe72b3fad20a92556c38743872ce9936070945b5571b91ebcc2?apiKey=64ac1a7b85e84629af509d56edee2526&"
          alt="Logo"
          className="w-32 max-md:w-24"
        />
      </div>
      <div className="flex gap-2.5 items-center">
        <div className="flex justify-center items-center px-3.5 text-3xl leading-8 text-white rounded-full bg-neutral-500 h-[2rem] w-[2rem]">
          A
        </div>
        <div className="text-base leading-5 text-sky-500">
          Welcome! <span className="font-medium">Andrew S</span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b37f8130d33919b67bbeb90687fb2b13208f4152d6487d3d870245e839db6fb?apiKey=64ac1a7b85e84629af509d56edee2526&"
          className="shrink-0 w-4 h-4"
        />
        <div className="flex gap-2.5 items-center px-4 py-2 text-sm text-white bg-sky-500 rounded-md border border-sky-500 cursor-pointer">
          <button>Contact Support</button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed497768b332ec6a18438d602c8ba173c3be32b8dfe35e408b12ed9e6dc49a2?apiKey=64ac1a7b85e84629af509d56edee2526&"
            className="shrink-0 w-2 h-2 border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Visitor_header;
