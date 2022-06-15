import React from "react";

export default function SearchForm(props) {
  return (
    <>
      <form onSubmit={props.onSearch}>
        <div className="row m-2 p-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="keyword"
              value={props.keyword}
              onChange={props.onSetKeyword}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-success" type="submit">
              Chercher
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
