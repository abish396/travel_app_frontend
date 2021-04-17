import React, { useState, useEffect } from "react";
import ImageGallery from "../imagegallery/imagegallery";
import CheckOutForm from "../checkoutform/checkoutform";
import TrekInfo from "../trekinfo/trekinfo";
export default function TrekDetails(props) {
  const Items = props.items;
  //console.log(props);
  return (
    <React.Fragment>
      <div className="container">
        <ImageGallery />
        <div
          className="row mt-5 mb-5"
          style={{
            padding: "0px",
          }}
        >
          <div
            className="col-7"
            style={{
              padding: "0px",
            }}
          >
            <div
              className="col-10 offset-lg-1"
              style={{
                height: "300px",
                padding: "0px",
              }}
            >
              <TrekInfo/>
            </div>
          </div>
          <div
            className="col-5"
            style={{
              padding: "0px",
            }}
          >
            <div
              className="col-10 offset-lg-1"
              style={{
                height: "300px",
                padding: "0px",
              }}
            >
              <CheckOutForm />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
