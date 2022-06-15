import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotosList from "./PhotosList";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";

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
      keyword + "&page=" + currentPage + "&per_page=" + pageSize;
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
    setCurrentPage(1);
    getHits();
  };

  useEffect(() => {
    getHits();
  }, [currentPage]);

  const goToPage = (index) => setCurrentPage(index);

  return (
    <div>
      <Pagination state={state} currentPage={currentPage} goToPage={goToPage}/>
      <div>
        <SearchForm
          keyword={keyword}
          onSearch={onSearch}
          onSetKeyword={onSetKeyword}
        />
        <PhotosList state={state} />
      </div>
    </div>
  );
}
