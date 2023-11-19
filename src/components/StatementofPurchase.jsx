import React, { useEffect, useState } from "react";
import { useStore } from "../store/formStore";

export default function StatementofPurchase() {
  const [form, setForm] = useState({});
  const { nextStep, statementofPurpouse, addstatementofPurpouse } = useStore();
  useEffect(() => {
    console.log({ statementofPurpouse });
  }, [statementofPurpouse]);
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      form?.q1?.length > 300 ||
      form?.q2?.length > 300 ||
      form?.q3?.length > 300
    ) {
      alert("All answers must be under 300 words");
    }
    console.log({ form });
    addstatementofPurpouse(form);
    setForm({});
    nextStep();
  };
  return (
    <div>
      <form onSubmit={HandleSubmit} action="">
        <div>
          <div className=" container  bg-white rounded my-4">
            <div
              className="row "
              style={{ backgroundColor: "rgba(26, 143, 230, 0.15)" }}
            >
              <h1>Statement of Purpose</h1>
              <br />
              <p className="text-secondary">
                Start creating a new form with the wide options of fields
                available
              </p>
              <br />
              <br />
              <p className="text-secondary">
                Provide the following information to process your application
              </p>
            </div>
            <div className="container py-4">
              <div class=" mb-3">
                <span
                  className="text-secondary float-start text-start"
                  for="floatingInput"
                >
                  1. Tell me about a time you were asked to do something you had
                  never done before. How did you react? What did you learn?
                </span>
                <textarea
                  class="form-control"
                  placeholder="Enter a Description"
                  id="floatingTextarea"
                  value={form?.q1 || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      q1: e.target.value,
                    })
                  }
                  required
                ></textarea>
              </div>
              <div class=" mb-3">
                <span
                  className="text-secondary float-start text-start"
                  for="floatingInput"
                >
                  2. Tell me about the last time something significant didn’t go
                  according to plan at work. What was your role? What was the
                  outcome?
                </span>
                <textarea
                  value={form?.q2 || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      q2: e.target.value,
                    })
                  }
                  required
                  class="form-control"
                  placeholder="Enter a Description"
                  id="floatingTextarea"
                ></textarea>
              </div>
              <div class=" mb-3">
                <span
                  className="text-secondary float-start text-start"
                  for="floatingInput"
                >
                  3. What are the three things that are most important to you in
                  a job?
                </span>
                <textarea
                  value={form?.q3 || ""}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      q3: e.target.value,
                    })
                  }
                  required
                  class="form-control"
                  placeholder="Enter a Description"
                  id="floatingTextarea"
                ></textarea>
              </div>
            </div>
          </div>
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
