import React from "react";

export default function Progress({ index, number, points, maxResult, answer }) {
  return (
    <header className="progress">
      <progress max={number} value={index + Number(answer !== null)} /> 
      <p>
        Questions <strong>{index + 1} </strong> / {number}{" "}
      </p>
      <p>
        {" "}
        <strong>{points} </strong> / {maxResult}{" "}
      </p>
    </header>
  );
}
