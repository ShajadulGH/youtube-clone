import React from "react";
import LeftBar from "../SideBar/LeftBar";
function Feed() {
  return (
    <div className=" flex flex-row h-[calc(100%-56px)]">
      <LeftBar />
      <div className="w-full">Videos</div>
    </div>
  );
}

export default Feed;
