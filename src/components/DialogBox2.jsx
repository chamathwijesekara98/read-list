import React from "react";

const DialogBox = () => {
  return (
    <div className="p-4 m-0 bg-[#9eb993] w-[400px] h-[200px] rounded-[20px]">
      <p className="text-xl font-bold text-left text-gray-700">
        What are your friends reading?
      </p>
      <p className=" mt-[20px] text-left text-black">
        Chances are your friends are discussing their favorite (and least
        favorite) books on Goodreads.
      </p>
    </div>
  );
};

export default DialogBox;
