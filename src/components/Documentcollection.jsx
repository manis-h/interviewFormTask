import React, { useEffect, useState } from "react";
import { useStore } from "../store/formStore";

export default function DocumentcOLLECTION() {
  const [form, setForm] = useState({});
  const { nextStep, documentCollection, addDocumentCollection } = useStore();
  useEffect(() => {
    console.log({ documentCollection });
  }, [documentCollection]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    addDocumentCollection(form);
    setForm({});
    nextStep();
  };
  return (
    <div>
      <form action="" onSubmit={HandleSubmit}>
        <div className=" container  bg-white rounded my-4">
          <div
            className="row "
            style={{ backgroundColor: "rgba(26, 143, 230, 0.15)" }}
          >
            <h1>Document Collection</h1>
            <br />
            <p className="text-secondary">
              Save time and efforts: Explore this template to find a set of
              questions required for document collection
            </p>
            <br />
            <br />
            <p className="text-secondary">
              Provide the following information to process your application
            </p>
          </div>
          <div className="container py-4">
            <div class=" mb-3">
              <span className="text-secondary float-start" for="floatingInput">
                10th Marksheet*
              </span>
              <input
                onChange={(e) =>
                  setForm({
                    ...form,
                    tenthMarkSheet: e.target.files[0],
                  })
                }
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder=""
                required
              />
            </div>
            <div class=" mb-3">
              <span className="text-secondary float-start" for="floatingInput">
                12th Marksheet*
              </span>
              <input
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder=""
                onChange={(e) =>
                  setForm({
                    ...form,
                    twelthMarkSheet: e.target.files[0],
                  })
                }
                required
              />
            </div>
            <div class=" mb-3">
              <span className="text-secondary float-start" for="floatingInput">
                Graduation Marksheet*
              </span>
              <input
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder=""
                onChange={(e) =>
                  setForm({
                    ...form,
                    graduationMarkSheet: e.target.files[0],
                  })
                }
              />
            </div>
            <div class=" mb-3">
              <span className="text-secondary float-start" for="floatingInput">
                Post Graduation Marksheet
              </span>
              <input
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder=""
                onChange={(e) =>
                  setForm({
                    ...form,
                    postgraduationMarkSheet: e.target.files[0],
                  })
                }
              />
            </div>
            <div class=" mb-3">
              <span className="text-secondary float-start" for="floatingInput">
                Resume/C.V*
              </span>
              <input
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder=""
                onChange={(e) =>
                  setForm({
                    ...form,
                    resume: e.target.files[0],
                  })
                }
                required
              />
            </div>
            <div class=" mb-3">
              <span className="text-secondary float-start" for="floatingInput">
                Recommendation Letter
              </span>
              <input
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder=""
                onChange={(e) =>
                  setForm({
                    ...form,
                    recommendationLetter: e.target.files[0],
                  })
                }
              />
            </div>
            <div class=" mb-3">
              <span className="text-secondary float-start" for="floatingInput">
                Salary Slips
              </span>
              <input
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder=""
                onChange={(e) =>
                  setForm({
                    ...form,
                    salarySlips: e.target.files[0],
                  })
                }
              />
            </div>
            <div class=" mb-3">
              <span className="text-secondary float-start" for="floatingInput">
                Increment Letter (if any)
              </span>
              <input
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder=""
                onChange={(e) =>
                  setForm({
                    ...form,
                    incrementLetter: e.target.files[0],
                  })
                }
              />
            </div>
            <div class=" mb-3">
              <span className="text-secondary float-start" for="floatingInput">
                Others(if any)
              </span>
              <input
                type="file"
                class="form-control"
                id="floatingInput"
                placeholder=""
                onChange={(e) =>
                  setForm({
                    ...form,
                    others: e.target.files[0],
                  })
                }
              />
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
