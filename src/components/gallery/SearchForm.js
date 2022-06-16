import React, {useState} from "react";

export default function SearchForm(props) {

  const [keyword, setKeyword] = useState("paris");

  const keywordChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    props.searchHandler(keyword);
  };

  return (
    <>
      <form onSubmit={searchHandler}>
        <div className="row m-2 p-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="keyword"
              value={keyword}
              onChange={keywordChangeHandler}
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
