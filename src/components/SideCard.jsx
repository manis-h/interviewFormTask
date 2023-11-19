import React from "react";

export default function SideCard({ title, desc }) {
  return (
    <div>
      <div class="card my-3">
        <div class=" border-1">
          <div className="row">
            <div className="col">
              <div
                class="square"
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "lightgray",
                }}
              ></div>
            </div>
            <div className="col">
              <h5 class="card-title">{title}</h5>
              <p style={{ fontSize: "small" }}>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
