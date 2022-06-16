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
    pageSize: 20,
  });

  const [currentKeyword, setCurrentKeyword] = useState("paris");
  const [currentPage, setCurrentPage] = useState(1);

  const getHits = () => {
    let url =
      "https://pixabay.com/api/?key=28065417-447b4705424148c20efada345&q=" +
      currentKeyword +
      "&page=" +
      currentPage +
      "&per_page=" +
      state.pageSize;
    axios
      .get(url)
      .then((resp) => {
        let nbPages = ((resp.data.totalHits / state.pageSize) | 0) + 1;
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

  const onSearch = (keyword) => {
    setCurrentKeyword(keyword);
    setCurrentPage(1);
  };

  useEffect(() => {
    getHits();
  }, [currentKeyword, currentPage]);

  const goToPage = (index) => setCurrentPage(index);

  return (
    <div>
      <Pagination state={state} currentPage={currentPage} goToPage={goToPage} />
      <div>
        <SearchForm searchHandler={onSearch} />
        <PhotosList state={state} />
      </div>
    </div>
  );
}
