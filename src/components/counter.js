import React, { useState } from "react";

function Counter(props) {
  const [state, setState] = useState({ counter: 1, list: [0] });

  const increment = () => {
    let c = state.counter + 1;
    if (c <= 0) return;
    setState({ ...state, counter: c, list: new Array(c).fill(0) });
  };

  const decrement = () => {
    let c = state.counter - 1;
    if (c <= 0) return;
    setState({ ...state, counter: c, list: new Array(c).fill(0) });
  };

  return (
    <div className="card m-3">
      <div className="card-header">
        <strong>
          {props.title} : {state.counter}
        </strong>
      </div>
      <div>
        <button className="btn btn-primary m-2" onClick={increment}>
          +
        </button>
        <button className="btn btn-primary m-2" onClick={decrement}>
          -
        </button>
      </div>
      <div className="card-body">
        {state.list.map((v, i) => (
          <img key={i} width={100} src={props.image}></img>
        ))}
      </div>
    </div>
  );
}

export default Counter;
