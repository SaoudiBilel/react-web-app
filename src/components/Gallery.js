import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Gallery() {
  const [state, setState] = useState({
    hits: [],
    totalPages: 1,
    pages: [],
  });

  const [keyword, setKeyword] = useState("paris");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const getHits = () => {
    let url =
      "https://pixabay.com/api/?key=28065417-447b4705424148c20efada345&q=" +
      keyword +
      "&page=" +
      currentPage +
      "&per_page=" +
      pageSize;
    axios
      .get(url)
      .then((resp) => {
        let nbPages = ((resp.data.totalHits / pageSize) | 0) + 1;
        setState({
          ...state,
          hits: resp.data.hits,
          totalPages: nbPages,
          pages: new Array(nbPages).fill(0),
        });
        //setCurrentPage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSetKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();
    getHits();
  };

  useEffect(() => {
    getHits();
  }, [currentPage]);

  const goToPage = (index) => setCurrentPage(index);

  return (
    <div>
      <div>
        <ul className="nav nav-pills">
          {state.pages.map((v, index) => (
            <li key={index}>
              <a
                className={
                  currentPage === index + 1 ? "btn btn-primary" : "btn"
                }
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <form onSubmit={onSearch}>
          <div className="row m-2 p-2">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="keyword"
                value={keyword}
                onChange={onSetKeyword}
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-success" type="submit">
                Chercher
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          {state.hits.map((hit, index) => (
            <div key={index} className="col-md-4">
              <div className="card">
                <div className="card-header">
                  {hit.tags} | {hit.webformatWidth} x {hit.webformatHeight}
                </div>
                <div className="card-body">
                  <img
                    className="card-img"
                    height={200}
                    src={hit.webformatURL}
                    alt="Image Not Found"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
