import React, { useState } from "react";

function Modal() {
  const [status, setStatus] = useState(true);

  return (
    <>
      {" "}
      <button onClick={() => setStatus(!status)} style={{ position: "fixed" }}>
        Modal
      </button>
      <br />
      <br />
      <br />
      <div
        style={{
          border: "1px solid black",
          visibility: status ? "visible" : "hidden",
        }}
      >
        <h3>hello</h3>
      </div>
    </>
  );
}

export default Modal;
