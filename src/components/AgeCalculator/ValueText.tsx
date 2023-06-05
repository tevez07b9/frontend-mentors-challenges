import React from "react";

interface Props {
  value: string | number;
  text: string;
}

const ValueText: React.FC<Props> = ({ value, text }) => {
  return (
    <p className="result">
      <span className="value">{value}</span>
      {text}
    </p>
  );
};

export default ValueText;
