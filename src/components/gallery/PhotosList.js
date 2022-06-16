import React from "react";
import PhotoItem from "./PhotoItem";

export default function PhotosList(props) {
  return (
    <>
      <div className="row">
        {props.state.hits.map((hit) => (
          <PhotoItem hit={hit} key={hit.id} details={false}/>
        ))}
      </div>
    </>
  );
}
