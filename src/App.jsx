import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DonghoSimple from "./baitap/DonghoSimple";
import DongHobutton from "./baitap/DongHobutton";
import TextEdit from "./baitap/Textedit";
import Bai11 from "./baitap/Bai11";
import Carousel from "./baitap/Carousel ";
import Modal from "./baitap/Modal";
import Tab from "./baitap/Tab";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <DonghoSimple />
      <DongHobutton /> */}
      {/* <TextEdit /> */}
      {/* <Bai11></Bai11> */}
      {/* <Carousel /> */}
      {/* <Modal /> */}
      {/* <Tab /> */}
    </>
  );
}

export default App;
