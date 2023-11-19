import React, { useEffect, useState } from "react";
import { useStore } from "../store/formStore";
import Swal from "sweetalert2";

export default function Interview() {
  const [form, setForm] = useState({});
  const {
    clearStep,
    interviewDetails,
    addinterviewDetails,
    detailCollection,
    documentCollection,
    statementofPurpouse,
  } = useStore();
  useEffect(() => {
    console.log({ interviewDetails });
  }, [interviewDetails]);
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!form?.interviewMedium) {
      alert("Specify Medium");
      return;
    }
    if (!form?.timeZone) {
      alert("Specify TimeZone");
      return;
    }

    addinterviewDetails(form);
    setForm({});

    let timerInterval;
    Swal.fire({
      title: " Form SuccessFully Submitted",
      html: "in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
        console.log(
          { interviewDetails },
          { detailCollection },
          { documentCollection },
          { statementofPurpouse }
        );
        // clearStep();
      }
    });
    // nextStep();
  };
  return (
    <div>
      <form action="" onSubmit={HandleSubmit}>
        <div className=" container  bg-white rounded my-4">
          <div
            className="row "
            style={{ backgroundColor: "rgba(26, 143, 230, 0.15)" }}
          >
            <h1>Interview Availablity</h1>
            <br />
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium rerum commodi facere sed optio assumenda quos quisquam
              perferendis eaque fugiat? Rerum ipsum placeat nostrum veniam
              accusantium aspernatur illum autem aliquam?
            </p>
            <br />
            <br />
            <p className="text-secondary">
              Provide the following information to process your application
            </p>
          </div>
          <div className="container py-4">
            <div className="mb-4">
              <span
                className="text-secondary float-start text-start"
                for="floatingInput"
              >
                1.Email*
              </span>
              <input
                required
                type="email"
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
            </div>
            <div className="mb-4">
              <span
                className="text-secondary float-start text-start"
                for="floatingInput"
              >
                2.Location
              </span>
              <input
                required
                type="text"
                className="form-control my-4"
                placeholder="Enter Your Location"
                value={form?.location || ""}
                onChange={(e) => {
                  setForm({
                    ...form,
                    location: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-4">
              <span
                className="text-secondary float-start text-start"
                for="floatingInput"
              >
                3.Interview Date
              </span>
              <input
                required
                value={form?.interviewDate || ""}
                onChange={(e) => {
                  setForm({
                    ...form,
                    interviewDate: e.target.value,
                  });
                }}
                type="date"
                className="form-control my-4"
              />
            </div>
            <div className="mb-4">
              <span
                className="text-secondary float-start text-start"
                for="floatingInput"
              >
                4.Interview Time
              </span>
              <input
                required
                value={form?.interviewTime || ""}
                onChange={(e) => {
                  setForm({
                    ...form,
                    interviewTime: e.target.value,
                  });
                }}
                type="time"
                className="form-control my-4"
              />
            </div>
            <div className="mb-4">
              <span
                className="text-secondary float-start text-start"
                for="floatingInput"
              >
                5.Time Zone
              </span>
              <select
                value={form?.timeZone || ""}
                onChange={(e) => {
                  setForm({
                    ...form,
                    timeZone: e.target.value,
                  });
                }}
                required={true}
                name=""
                placeholder="Select TimeZone"
                id=""
              >
                <option>Select</option>
                <option value="India Standard Time">
                  India Standard Time(GMT+5:30)
                </option>
              </select>
            </div>
            <div className="mb-4">
              <span
                className="text-secondary float-start text-start"
                for="floatingInput"
              >
                5.Interview Medium
              </span>
              <select
                required
                value={form?.interviewMedium || ""}
                onChange={(e) => {
                  setForm({
                    ...form,
                    interviewMedium: e.target.value,
                  });
                }}
                name=""
                placeholder="Select Medium of Interview"
                id=""
              >
                <option>Select</option>
                <option value="zoom">Zoom</option>
              </select>
            </div>
          </div>
        </div>
        <div className="">
          <button
            // onClick={() => }
            className="my-2 btn btn-primary float-end"
            role="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
