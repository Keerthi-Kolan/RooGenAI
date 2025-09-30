import React from "react";
import { MEMBERS } from "../constants";

const MeetOurTeam = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Meet Our Team</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {MEMBERS.map((Member, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-neutral-700 p-6 rounded flex flex-col items-center"
          >
            <a href={Member.link} target="_blank" rel="noopener noreferrer">
              <img
                src={Member.image}
                width={200}
                height={200}
                alt={Member.name}
                className="mb-4 rounded mx-auto"
              />
            </a>
            <p className="mb-1 text-lg font-medium text-neutral-200 text-center">
              {Member.name}
            </p>
            <p className="text-sm text-neutral-400 text-center">
              {Member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
