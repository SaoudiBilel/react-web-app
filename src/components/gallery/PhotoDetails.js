import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhotoItem from "./PhotoItem";
import axios from "axios";

export default function PhotoDetails() {
  const [hit, setHit] = useState(null);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getHits(id);
  }, []);

  const getHits = (id) => {
    let url =
      "https://pixabay.com/api/?key=28065417-447b4705424148c20efada345&id=" +
      id;
    axios
      .get(url)
      .then((resp) => {
        setHit(resp.data.hits[0]);
        setLoader(() => false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {loader ? <h1>Loading...</h1> : <PhotoItem hit={hit} details={true} />}
    </div>
  );
}
