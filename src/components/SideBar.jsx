import React from "react";
import SideCard from "./SideCard";

export default function SideBar() {
  return (
    <div>
      <SideCard
        title={"Details Collection"}
        desc={`Collect information from Candidates on their education, work
      experience, contact no,etc`}
      />

      <SideCard
        title={"Document Collection"}
        desc={`Save time and efforts: Explore this template to find a set of questions required for document collection`}
      />
      <SideCard
        title={"Statement of Purpose"}
        desc={`Start creating a new form with the wide options of fields available`}
      />
      <SideCard
        title={"Interview Availability "}
        desc={`Start creating a new form with the wide options of fields available`}
      />
    </div>
  );
}
