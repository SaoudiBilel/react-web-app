import React from "react";
import { Link } from "react-router-dom";

export default function PhotoItem({ hit, details }) {
  return (
    <>
      <div className={!details ? "col-md-4 m-2" : "m-2"}>
        <div className="card">
          {!details ? (
            ""
          ) : (
            <div className="card-header">
              {hit.tags} | {!details ? hit.webformatWidth : hit.imageWidth} x{" "}
              {!details ? hit.webformatHeight : hit.imageHeight}
            </div>
          )}
          <div className="card-body">
            {!details ? (
              <img
                className="card-img"
                //height={200}
                src={hit.webformatURL}
                alt="hit details"
              />
            ) : (
              <img
                className="card-img"
                src={hit.largeImageURL}
                alt="hit details"
              />
            )}
          </div>
          {details ? (
            <div>
              <div className="row p-2">
                <div className="col-auto">
                  <img
                    className="img-thumbnail"
                    src={hit.userImageURL}
                    alt="hit details"
                  />
                </div>
                <div className="">
                  <ul className="nav nav-pills">
                    <li className="list-group-item">
                      User: <strong>{hit.user}</strong>
                    </li>
                    <li className="list-group-item">
                      Views: <strong>{hit.views}</strong>
                    </li>
                    <li className="list-group-item">
                      Comments: <strong>{hit.comments}</strong>
                    </li>
                    <li className="list-group-item">
                      Downloads: <strong>{hit.downloads}</strong>
                    </li>
                    <li className="list-group-item">
                      Views: <strong>{hit.views}</strong>
                    </li>
                    <li className="list-group-item">
                      Likes: <strong>{hit.likes}</strong>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link className="btn btn-primary" to={"/gallery"}>
                    Back
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="m-2">
              <Link className="btn btn-success" to={"/details/" + hit.id}>
                Details
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
