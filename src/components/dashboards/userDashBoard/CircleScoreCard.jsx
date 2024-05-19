import React, { useState } from "react";

function CircleScoreCard() {
  const [scores, setScores] = useState({
    technicalSkills: 65,
    softSkills: 20,
    commSkills: 15,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScores((prevScores) => ({
      ...prevScores,
      [name]: value,
    }));
  };

  return (
    <div className="grow pt-7 pr-8 w-full bg-white rounded-md border border-solid border-black border-opacity-10 max-md:mt-7 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-lg font-medium leading-6 text-slate-800 max-md:mt-10">
            <div className="flex gap-2.5 self-start ml-11 max-md:ml-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08727c6676285b6db8684addac365cf99a2ca9a048727fc8bd9872e69f27ebac?"
                className="shrink-0 aspect-square w-[25px]"
              />
              <div className="flex-auto my-auto">Areas to Improve</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee0b2bce01b38b1f9bc7c0b5b7e11eb1e19d799748890bf49aed00a0df8278c6?"
              className="mt-1 w-full aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-16 max-md:mt-10">
            <div className="flex flex-col px-4 py-4 rounded-md border border-solid border-neutral-500">
              <div className="flex gap-2.5 text-2xl whitespace-nowrap text-slate-800">
                <div className="shrink-0 self-start w-3 h-3 bg-sky-500 rounded-full" />
                <div className="flex-auto">{scores.technicalSkills}%</div>
              </div>
              <div className="mt-2.5 text-base leading-4 text-neutral-500">
                Technical Skills
              </div>
            </div>
            <div className="flex flex-col items-start py-4 pr-16 pl-4 mt-1.5 rounded-md border border-solid border-neutral-500 max-md:pr-5">
              <div className="flex gap-2.5 text-2xl whitespace-nowrap text-slate-800">
                <div className="shrink-0 self-start w-3 h-3 bg-orange-300 rounded-full" />
                <div>{scores.softSkills}%</div>
              </div>
              <div className="mt-2 text-base leading-4 text-neutral-500">
                Soft Skills
              </div>
            </div>
            <div className="flex flex-col items-start py-4 pr-12 pl-4 mt-1.5 rounded-md border border-solid border-neutral-500 max-md:pr-5">
              <div className="flex gap-2.5 text-2xl whitespace-nowrap text-slate-800">
                <div className="shrink-0 self-start w-3 h-3 bg-orange-200 rounded-full" />
                <div>{scores.commSkills}%</div>
              </div>
              <div className="mt-2.5 text-base leading-4 text-neutral-500">
                Comms Skills
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircleScoreCard;
