import React, { useEffect, useState, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import { getDataFromApi } from "../../utils/api";
import Context from "../../context/context";
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestionVideoCard from "./SuggestionVideoCard";
export const Video = () => {
  const [videoDetails, setVideoDetails] = useState();
  const [relatedContent, setRelatedContent] = useState();
  const { id } = useParams();
  const { setLoading, loading } = useContext(Context);
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedContent();
  }, [id]);
  const fetchVideoDetails = () => {
    setLoading(true);
    getDataFromApi(`video/details/?id=${id}`).then((details) => {
      setVideoDetails(details);
      setLoading(false);
    });
  };
  const fetchRelatedContent = () => {
    getDataFromApi(`video/related-contents/?id=${id}`).then((contetns) => {
      setRelatedContent(contetns);
    });
  };
  console.log(videoDetails);
  console.log(relatedContent);

  return (
    <Fragment>
      <div className=" flex justify-center flex-row h-[calc(100%-56px)] bg-black">
        {!loading && (
          <div className=" w-full max-w-[1280px] flex flex-col lg:flex-row">
            <div className=" flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
              <div className=" h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  width="100%"
                  height="100%"
                  playing={true}
                  style={{ backgroundColor: "#000000" }}
                  controls
                />
              </div>
              <div className=" text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                {videoDetails?.title}
              </div>
              <div className=" flex justify-between flex-col md:flex-row mt-4">
                <div className=" flex">
                  <div className="flex items-start">
                    <div className="flex h-11 w-11 rounded-full overflow-hidden">
                      <img
                        className="h-full w-full object-cover"
                        src={videoDetails?.author?.avatar[0]?.url}
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-3">
                    <div className="text-white text-md font-semibold flex items-center">
                      {videoDetails?.author?.title}
                      {videoDetails?.author?.badges[0]?.type ===
                        "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                      )}
                    </div>
                    <div className="text-white/[0.7] text-sm">
                      {videoDetails?.author?.stats?.subscribersText}
                    </div>
                  </div>
                </div>
                <div className="flex text-white mt-4 md:mt-0">
                  <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                    <AiOutlineLike className="text-xl text-white mr-2" />
                    {`${abbreviateNumber(videoDetails?.stats?.views, 2)} Likes`}
                  </div>
                  <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                    {`${abbreviateNumber(videoDetails?.stats?.views, 2)} Views`}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
              {relatedContent?.contents?.map((item, index) => {
                if (item?.type !== "video") return false;
                return <SuggestionVideoCard key={index} video={item?.video} />;
              })}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};
