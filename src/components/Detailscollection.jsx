import React, { useEffect, useState } from "react";
import { useStore } from "../store/formStore";

export default function Detailscollection() {
  const [form, setForm] = useState({});
  useEffect(() => {
    console.log({ form });
  }, [form]);
  const {
    nextStep,
    detailCollection,
    addetailCollection,
    addinterviewDetails,
    addstatementofPurpouse,
    addDocumentCollection,
  } = useStore();
  useEffect(() => {
    console.log({ detailCollection });
  }, [detailCollection]);
  useEffect(() => {
    // cleanup

    addetailCollection({});
    addinterviewDetails({});
    addstatementofPurpouse({});
    addDocumentCollection({});
  }, []);
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (form?.mobile) {
      if (form.mobile.length != 10) {
        alert("Invalid Mobile ||Please enter a 10 Digit Mobile Number");
        return;
      }
    }
    addetailCollection(form);
    setForm({});
    nextStep();
  };
  return (
    <div className=" container  bg-white rounded my-4">
      <form onSubmit={HandleSubmit}>
        <div
          className="row "
          style={{ backgroundColor: "rgba(26, 143, 230, 0.15)" }}
        >
          <h1>Details Collection</h1>
          <br />
          <p className="text-secondary">
            Collect information from Candidates on their education, work
            experience, contact no,etc
          </p>
          <br />
          <br />
          <p className="text-secondary">
            Provide the following information to process your application
          </p>
        </div>
        <div className="container py-4">
          <input
            type="text"
            className="form-control my-4"
            placeholder="Enter Your Name*"
            required
            value={form?.name || ""}
            onChange={(e) => {
              setForm({
                ...form,
                name: e.target.value,
              });
            }}
          />
          <input
            type="email"
            required
            className="form-control my-4"
            placeholder="Enter Your Email*"
            value={form?.email || ""}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
              });
            }}
          />
          <form class="form-floating">
            <input
              value={form?.dob || ""}
              type="date"
              class="form-control"
              id="floatingInputValue"
              onChange={(e) => {
                setForm({
                  ...form,
                  dob: e.target.value,
                });
              }}
            />
            <label for="floatingInputValue">Date of Birth</label>
          </form>
          <input
            value={form?.mobile || ""}
            type="number"
            className="form-control my-4"
            placeholder="Enter Your 10 digit Contact No."
            minLength={10}
            onChange={(e) => {
              setForm({
                ...form,
                mobile: e.target.value,
              });
            }}
          />
        </div>
        <div className="">
          <button
            // onClick={() => }
            className="my-2 btn btn-primary float-end"
            role="submit"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
