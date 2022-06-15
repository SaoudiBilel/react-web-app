import React from "react";

export default function PhotosList(props) {
  return (
    <>
      <div className="row">
        {props.state.hits.map((hit, index) => (
          <div key={index} className="col-md-4">
            <div className="card">
              <div className="card-header">
                {hit.tags} | {hit.webformatWidth} x {hit.webformatHeight}
              </div>
              <div className="card-body">
                <img
                  className="card-img"
                  //height={200}
                  src={hit.webformatURL}
                  alt="Image Not Found"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
