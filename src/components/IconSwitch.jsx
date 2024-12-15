import React from "react";

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div onClick={onSwitch} style={{ cursor: "pointer" }}>
      <span className="material-icons">{icon}</span>
    </div>
  );
};

export default IconSwitch;
