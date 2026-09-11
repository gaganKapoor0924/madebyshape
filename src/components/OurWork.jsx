import React from "react";

const OurWork = () => {
  const getBlocks = () => {
    return (
      <>
        <div className="w-6/12">
          <video
            autoplay="true"
            playsInline
            muted
            loop
            className="rounded-lg w-full h-[500px] object-cover"
          >
            <source
              src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/gary-neville-thumbnail_2024-06-03-125526_bljp.mp4"
              type="video/mp4"
            />
          </video>
          <div className="py-10">
            <span className="text-xl">2023 &bull; CaryNeville</span>
            <h2 className="text-2xl font-semibold">
              Refreshing Gary Neville's digital presence
            </h2>
          </div>

          <div className="w-full">
            <img
              src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Nth-Degree/Camera_6_Sun_loungers_Dining_set_Final_300dpi.jpg?w=400&amp;h=300&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.2303&amp;fp-y=0.6967&amp;dm=1754560483&amp;s=56e523baec3e79733347aae4d3e04747"
              className=" w-full   relative z-10 rounded-lg mt-10"
              loading="lazy"
            />
            <div className="py-10">
              <span className="text-xl">2024 &bull; Nth Degree</span>
              <h2 className="text-2xl font-semibold">
                Redefining a leading global talent group
              </h2>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <h2>
            <span className="text-xl">&bull; Our Work</span>
            <p className="text-6xl font-semibold">
              Take a look at our projects
            </p>
          </h2>
          <img
            src="https://made-byshape.transforms.svdcdn.com/production/uploads/images/workImages/Nth-Degree/Camera_6_Sun_loungers_Dining_set_Final_300dpi.jpg?w=400&amp;h=300&amp;q=80&amp;fm=webp&amp;fit=crop&amp;crop=focalpoint&amp;fp-x=0.2303&amp;fp-y=0.6967&amp;dm=1754560483&amp;s=56e523baec3e79733347aae4d3e04747"
            className=" w-full   relative z-10 rounded-lg mt-10"
            loading="lazy"
          />
          <div className="py-10">
            <span className="text-xl">2024 &bull; Nth Degree</span>
            <h2 className="text-2xl font-semibold">
              Furniture designed to the greatest extent
            </h2>
          </div>

          <div className="w-full">
            <video
              autoplay="true"
              playsInline
              muted
              loop
              className="rounded-lg w-full h-[500px] object-cover"
            >
              <source
                src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/ymu-thumbnail.mp4"
                type="video/mp4"
              />
            </video>
            <div className="py-10">
              <span className="text-xl">2024 &bull; Nth Degree</span>
              <h2 className="text-2xl font-semibold">
                Redefining a leading global talent group
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="max-w-8xl mx-auto mt-20">
      <div className="flex justify-between gap-20">{getBlocks()}</div>
    </div>
  );
};

export default OurWork;
