import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(121);

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="IncDec">
              <h1 className="h3 display-4 text-decoration-underline">
                FUNCTIONAL COUNT
              </h1>
              <h1 className="h4 display-5">COUNT</h1>

              <p>
                <button
                  type="button"
                  class="btn btn-outline-success btn-lg"
                  onClick={() => {
                    setCount(count + 13);
                  }}
                >
                  Increase Count
                </button>
              </p>
              <p>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-lg"
                  onClick={() => {
                    setCount(count - 90);
                  }}
                >
                  Decrease Count
                </button>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <h1 className="h1 display-1 ff">{count}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

{
  /* <IncrementDecrement
          h1$1="FUNCTIONAL COUNT- INCREMENT"
          h1$2="COUNTER"
          h1$3="count"
          buttonFunc="onClick={() => {
                      setCount(count + 13)
                    }}"
          button="Increase Count"
        />
        <IncrementDecrement
          h1$1="FUNCTIONAL COUNT- DECREMENT"
          h1$2="COUNTER"
          h1$3="{count}"
          buttonFunc="onClick={() => {
                      setCount(count - 44)
                    }}"
          button="Decrease Count"
        /> */
}
