import React from "react";
import "./style.css";
function o(props) {
  return (
    <div>
      <svg
        width="71"
        height="71"
        viewBox="0 0 71 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
      >
        <circle
          cx="35.5"
          cy="35.5"
          r="30.5"
          fill="none"
          stroke="black"
          className="o_path"
          stroke-width="10"
          id={props.o}
        />
      </svg>
    </div>
  );
}

export default o;
