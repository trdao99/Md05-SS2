import React, { useState } from "react";

function Tab() {
  const tabs = [
    {
      title: "sport",
      content: "This is the sports content.",
    },
    {
      title: "finance",
      content: "This is the finance content.",
    },
    {
      title: "games",
      content: "This is the games content.",
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <div>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setCurrentTab(index)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        <h1>{tabs[currentTab].title}</h1>
        <h4>{tabs[currentTab].content}</h4>
      </div>
    </>
  );
}

export default Tab;
