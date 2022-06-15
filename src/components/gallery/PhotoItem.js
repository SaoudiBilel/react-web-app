import React from "react";

export default function PhotoItem(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            {props.hit.tags} | {props.hit.webformatWidth} x{" "}
            {props.hit.webformatHeight}
          </div>
          <div className="card-body">
            <img
              className="card-img"
              //height={200}
              src={props.hit.webformatURL}
              alt="Image Not Found"
            />
          </div>
        </div>
      </div>
    </>
  );
}
