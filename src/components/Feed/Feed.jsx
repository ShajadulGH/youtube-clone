import React, { useContext, useEffect } from "react";
import Context from "../../context/context";
import LeftBar from "../SideBar/LeftBar";
import Videos from "../Videos/Videos";

function Feed() {
  const { searchResults, loading } = useContext(Context);
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);
  return (
    <div className=" flex flex-row h-[calc(100%-56px)] ">
      <LeftBar />
      <div className=" bg-black w-full h-full overflow-y-auto ">
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4">
          {!loading &&
            searchResults.map((item) => {
              if (item?.type !== "video") return false;
              return <Videos key={item?.video?.videoId} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Feed;
