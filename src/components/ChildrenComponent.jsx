import React from "react";

function ChildrenComponent(prop) {
  return (
    <>
      <h1>{prop.company}</h1>
      <h1>{prop.user}</h1>
    </>
  );
}

export default ChildrenComponent;
