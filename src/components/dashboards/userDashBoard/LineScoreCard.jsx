import React, { useState } from "react";

function ScoreCard() {
  const [results, setResults] = useState([
    { id: 1, title: "Front End Developer", status: "Good", color: "bg-sky-500", score: 70 },
    { id: 2, title: "Backend Developer", status: "Improvement", color: "bg-red-500", score: 30 },
    { id: 3, title: "Full Stack Developer", status: "Excellent", color: "bg-emerald-600", score: 90 },
  ]);

  return (
    <div className="flex flex-col grow px-7 pt-5 pb-10 w-full bg-white rounded-md border border-solid border-black border-opacity-10 max-md:px-5 max-md:mt-7 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2.5 my-auto text-lg font-medium leading-6 text-slate-800">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d2f49840ca8a31ea08e01a78618b907c8907134581dd5e7bcd439e58337a11e?"
            className="shrink-0 aspect-square w-[21px]"
            alt="icon"
          />
          <div className="flex-auto">Recent Interview Scores</div>
        </div>
        <div className="flex gap-0 justify-center px-2.5 py-2 text-xs font-light leading-4 whitespace-nowrap rounded-md border border-solid border-neutral-500 text-neutral-500">
          <div className="my-auto">Months</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfc2f49fb65afc0efcc3d9111695237c6de24881ea66717d53424c9202534094?"
            className="shrink-0 aspect-square w-[18px]"
            alt="icon"
          />
        </div>
      </div>
      <div className="shrink-0 mt-3.5 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10 max-md:max-w-full" />
      <div className="flex gap-5 mt-10 max-md:flex-wrap">
        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
          {results.map((result) => (
            <div key={result.id} className="mb-12 max-md:mb-10">
              <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto text-base leading-4 text-slate-800">
                  {result.title}
                </div>
                <div className={`my-auto text-sm leading-5 ${result.status === "Good" ? "text-neutral-500" : result.status === "Improvement" ? "text-red-500" : "text-emerald-600"}`}>
                  {result.status}
                </div>
              </div>
              <div className="flex flex-col justify-center mt-4 rounded-md bg-zinc-300 max-md:max-w-full">
                <div
                  className={`shrink-0 ${result.color} rounded-md h-[5px] max-md:max-w-full`}
                  style={{ width: `${result.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e586b47de916b2a55f2067ab301ac78674b44772a53aaac8deab7fbf8e790264?"
            className="aspect-square w-[47px]"
            alt="icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a39dbc40c6fdd066a8d6fd11ef260bb7d51b4ef30cb4c84a1a56f9279ffc12?"
            className="mt-6 aspect-square w-[67px]"
            alt="icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a8fbf811b5cc43b6afa7b8b94250438e1429771bbef2afa5c6b39e557c707bf?"
            className="mt-8 aspect-square w-[47px]"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;
