import React from "react";
import moment from "moment";
const VideoDuration = ({ length }) => {
  console.log(`time in duration: ${length}`);
  const duration = moment()?.startOf("day")?.seconds(length)?.format("H:mm:ss");
  return (
    <div className=" absolute bottom-2 right-2 bg-black text-white py-1 px-2 rounded-md text-xs">
      {duration}
    </div>
  );
};

export default VideoDuration;
