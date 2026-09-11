import React from "react";

const Banner = () => {
  return (
    <div className="px-4 h-[80vh]">
      <div className="max-w-7xl mx-auto mt-50  p-10 rounded-md h-full relative">
        <video
          autoplay="true"
          controls
          loop
          muted
          playsinline
          className="absolute top-0 left-0 w-full object-cover h-full rounded-md z-10"
        >
          <source
            src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4"
            type="video/mp4"
          />
        </video>
        <div className="p-4 absolute top-[-100px] left-20 rounded-md z-20">
          <h2 className="flex  flex-col">
            <span className="text-xl font-semibold bg-white py-4">
              Hiya, we’re Shape{" "}
            </span>
            👋
            <p className="text-8xl bg-white rounded-md  px-4 inline inde-48">
              A web design and branding agency in Manchester
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
