/*import React from "react";

const Header = () => {
  return (
    <header
      className="w-full p-1 m-0"
      style={{
        backgroundImage: "url('./src/assets/img001.png')",
        backgroundSize: "cover",
        backgroundPosition: "right",
        height: "150px",
      }}
    >
      <h1 className="text-[100px] font-bold text-center text-black">
        ReadList
      </h1>
    </header>
  );
};

export default Header;*/

import React from "react";

const Header = () => {
  return (
    <header className="w-full p-0 m-0">
      <h1 className="text-[70px] font-bold text-left bg-[#66785F] text-black">
        ReadList
      </h1>
      <div
        className="w-full p-0 m-0"
        style={{
          backgroundImage: "url('./src/assets/image_01.png')",
          backgroundSize: "cover",
          backgroundPosition: "right",
          height: "150px",
          width: "100%",
        }}
      ></div>
    </header>
  );
};

export default Header;
