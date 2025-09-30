import React from "react";
import { ADVISORS } from "../constants";
const MeetOurAdvisors = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Meet Our Advisors</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {ADVISORS.map((Advisor, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-neutral-700 p-6 rounded flex flex-col items-center"
          >
            <a href={Advisor.link} target="_blank" rel="noopener noreferrer">
              <img
                src={Advisor.image}
                width={200}
                height={200}
                alt={Advisor.name}
                className="mb-4 rounded mx-auto"
              />
            </a>
            <p className="mb-1 text-lg font-medium text-neutral-200 text-center">
              {Advisor.name}
            </p>
            <p className="text-sm text-neutral-400 text-center">
              {Advisor.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurAdvisors;
