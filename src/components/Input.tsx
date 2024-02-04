import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;
export const Input: React.FC<Props> = (props) => {
  return <input {...props} />;
};
