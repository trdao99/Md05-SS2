import React, { useState } from "react";

function StateComponent() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <>
      <div>StateComponent</div>
    </>
  );
}

export default StateComponent;
