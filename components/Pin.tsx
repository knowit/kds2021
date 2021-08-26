import React from "react";



interface PinProps {
  className?: string;
  small?: boolean;
  color?: string;
}

const Pin = ({ className, small, color }: PinProps) => {
  color = color === undefined ? "#FF00FF" : color;

  return (
    <div className={`pin ${small ? "small" : ""} ${className}`}>
      <div className="top" style={{ borderColor: color }} />
      <div
        className="bottom"
        style={{ borderColor: `${color} transparent transparent  transparent` }}
      />
    </div>
  );
};

export default Pin;
