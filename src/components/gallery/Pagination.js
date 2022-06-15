import React from "react";

export default function Pagination(props) {
  return (
    <>
      <div>
        <ul className="nav nav-pills">
          {props.state.pages.map((v, index) => (
            <li key={index}>
              <a
                className={
                  props.currentPage === index + 1 ? "btn btn-primary" : "btn"
                }
                onClick={() => props.goToPage(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
