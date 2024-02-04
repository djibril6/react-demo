import React from "react";

type Props = {
  text: string;
};
export const Button: React.FC<Props> = ({ text }) => {
  return (
    <button type="submit" style={{ height: 35, padding: "2px 10px" }}>
      {text}
    </button>
  );
};
