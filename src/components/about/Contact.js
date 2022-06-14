import React from "react";

export default function Contact(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <strong>
            <label>
              <h1>{props.title}</h1>
            </label>
          </strong>
        </div>
        <div className="row">
          <div className="col">
            <img width={200} src={props.contact.profile}></img>
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">{props.contact.name}</li>
              <li className="list-group-item">{props.contact.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
