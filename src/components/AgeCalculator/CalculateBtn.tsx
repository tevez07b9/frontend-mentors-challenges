import React from "react";

const CalculateBtn = () => {
  return (
    <button
      className="bg-black absolute right-0 bottom-[-40px] rounded-full p-2 md:p-4"
      type="submit"
    >
      <img
        className="scale-75 md:scale-1"
        src="./images/icon-arrow.svg"
        alt="Arrow Down Icon"
      />
    </button>
  );
};

export default CalculateBtn;
