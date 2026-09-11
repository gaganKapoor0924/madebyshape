import React from "react";

const WhoAreWe = () => {
  return (
    <div>
      <div className="flex justify-between py-10">
        <p className="flex-1 text-xl ">&bull; Who are we?</p>
        <div className="flex-2">
          <h2 className="text-4xl indent-48">
            An independent web design and branding agency in Manchester set up
            in 2010 who care, build relationships, have industry experience, and
            win awards.
          </h2>
          <div className="flex gap-4 mt-10">
            <button className="py-2 px-6 bg-[#d0ff71] rounded-full text-sm font-semibold text-xl">
              About Shape
            </button>
            <button className="text-xl">Meet the Team</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
