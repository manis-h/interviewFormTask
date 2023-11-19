import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Detailscollection from "./components/Detailscollection";
import SideBar from "./components/SideBar";
import DocumentcOLLECTION from "./components/DocumentcOLLECTION.JSX";
import StatementofPurchase from "./components/StatementofPurchase";
import Interview from "./components/Interview";
import { useStore } from "./store/formStore";

function App() {
  const { step } = useStore();
  return (
    <>
      {step}
      <div className="">
        <div className="row">
          <div className="col-5 border-end">
            <SideBar />
          </div>
          <div className="col-7" style={{ backgroundColor: "lightgray" }}>
            {step == 1 && <Detailscollection />}
            {step == 2 && <DocumentcOLLECTION />}
            {step == 3 && <StatementofPurchase />}
            {step == 4 && <Interview />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
