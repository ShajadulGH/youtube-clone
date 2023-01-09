import React from "react";
import LeftBar from "./LeftBar";
function Feed() {
  return (
    <div className=" flex flex-row h-[calc(100%-56px)]">
      <LeftBar />
      <div className=" bg-gray-600 w-full">Videos</div>
    </div>
  );
}

export default Feed;
