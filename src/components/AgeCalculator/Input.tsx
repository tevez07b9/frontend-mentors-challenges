import React from "react";

interface Props {
  label: string;
  name: string;
  type?: "text" | "number";
  defaultValue?: string | number;
  error?: string;
}

const Input: React.FC<Props> = ({
  label,
  name,
  error,
  type = "text",
  defaultValue = "",
}) => {
  return (
    <div className={`flex flex-col ${error ? "error" : "mb-8 md:mb-6"}`}>
      <label className="label">{label}</label>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="input"
      />
      {error ? <p className="text-xs md:text-base italic">{error}</p> : null}
    </div>
  );
};

export default Input;
