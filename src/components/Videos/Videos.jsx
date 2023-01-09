import React from "react";
import { Link } from "react-router-dom";
import VideoDuration from "./VideoDuration";

const Videos = () => {
  return (
    <Link>
      <div className="flex flex-col mb-8">
        {/* Thumbnail */}
        <div className=" relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://i.ytimg.com/vi/KA8e26WBRVA/hqdefault.jpg?s%E2%80%A6AFwAcABBg==&rs=AOn4CLDMSBUhSiEK-SpuBGd047PPARiiAw"
            alt="thumbnail"
          />
          <VideoDuration />
        </div>
        {/* Video Title, Channel etc. */}
        <div className="  flex flex-row mt-3">
          <div className="flex items-start mr-3">
            <div className=" flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className=" h-full w-full object-cover"
                src="https://yt3.ggpht.com/8Lwf4LCR2VmxD2JKiozRu7Lo2jGdnhRs42NawHmMN_xJ8TdW-30e3J9DhumEksivp1Esog4A=s88-c-k-c0x00ffffff-no-rj"
                alt="author"
              />
            </div>
          </div>
          <div className=" flex flex-col">
            <div className=" line-clamp-2">
              Abbur Razzak Bin Yousuf - Lorem ipsum dolor sit amet consectetur
              dolor sit amet consectetur
            </div>
            <div className="">Shajadul Karim Bhuiyan</div>

            <div className=" flex flex-row gap-2">
              <div className="">Views 1.2m</div>
              <div className="">.</div>
              <div className="">2 years ago</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Videos;
