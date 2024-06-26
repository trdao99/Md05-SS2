import React, { useState } from "react";

function Bai11() {
  const users = [
    {
      id: 1,
      name: "C",
    },
    {
      id: 2,
      name: "B",
    },
    {
      id: 3,
      name: "A",
    },
  ];
  const [save, setSave] = useState(users);
  const [input, setInput] = useState("");

  console.log(input);

  const handleSortByName = () => {
    const sortedUsers = [...save].sort((a, b) => a.name.localeCompare(b.name));
    setSave(sortedUsers);
  };

  const handleSortById = () => {
    const sortedUsers = [...save].sort((a, b) => a.id - b.id);
    setSave(sortedUsers);
  };

  return (
    <>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <div>
        {save
          .filter((u) => u.name.toLowerCase().includes(input.toLowerCase()))
          .map((u) => (
            <div key={u.id}>
              <p>
                {u.id}: {u.name}
              </p>
            </div>
          ))}
      </div>

      <div>
        <button onClick={handleSortByName}>sort by name</button>
        <button onClick={handleSortById}>sort by id</button>
      </div>
    </>
  );
}

export default Bai11;
