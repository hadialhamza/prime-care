import React from "react";

const Switch = ({ checked, onChange }) => {
  return (
    <label className="relative inline-block w-12 h-7 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span className="absolute inset-0 rounded-full bg-[#404ca1] transition-colors duration-500 peer-checked:bg-[#404ca1]" />
      <span className="absolute left-[11%] bottom-[18%] h-[1.2em] w-[1.2em] rounded-full bg-[#404ca1] transition-all duration-500 shadow-[inset_8px_-4px_0px_0px_#DAD9D7] peer-checked:translate-x-full peer-checked:shadow-[inset_15px_-4px_0px_15px_#fff000]" />
    </label>
  );
};

export default Switch;
