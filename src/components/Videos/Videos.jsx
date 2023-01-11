import React from "react";
import { Link } from "react-router-dom";
import VideoDuration from "./VideoDuration";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
const Videos = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        {/* Thumbnail */}
        <div className=" relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails?.[0]?.url}
            alt="thumbnail"
          />
          {video?.lengthSeconds && (
            <VideoDuration length={video?.lengthSeconds} />
          )}
        </div>
        {/* Video Title, Channel etc. */}
        <div className="  flex flex-row mt-3">
          <div className="flex items-start mr-3">
            <div className=" flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className=" h-full w-full object-cover"
                src={video?.author?.avatar?.[0]?.url}
                alt="author"
              />
            </div>
          </div>
          <div className=" flex flex-col">
            <span className=" line-clamp-2 text-[18px] font-bold mb-3">
              {video?.title}
            </span>
            <span className=" flex items-center gap-1 text-[14px] text-white/[0.7] mb-[5px]">
              {video?.author?.title}
              {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className=" text-white/[0.7] text-[14px]" />
              )}
            </span>

            <div className=" flex flex-row gap-2 text-white/[0.7] text-[14px] items-center">
              <span className="">
                {abbreviateNumber(video?.stats?.views, 1)} Views
              </span>
              <span className=" font-bold text-[14px] mb-[4px] mr-[-3px] ml-[-3px]">
                .
              </span>
              <span className="">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Videos;
