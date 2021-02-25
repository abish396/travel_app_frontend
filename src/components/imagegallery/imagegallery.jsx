import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ImageGallery(props) {
  const Items = props.items;
  //console.log(props);
  return (
    <React.Fragment>
      <div className="row ml-5" style={{ marginTop: "10%", height: "350px" }}>
        <div
          className="col-5"
          style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            padding: "0px",
          }}
        >
          <img
            className="card-img-top"
            src="../../../assets/img/LRM_EXPORT_847859674142762_20200418_182011074.jpeg"
            alt="Card cap"
            style={{ height: "350px", width: "100%" }}
          />
        </div>
        <div
          className="col-3 ml-2"
          style={{ padding: "0px" }}
        >
          <div
            className="col-12"
            style={{ height: "170px", padding: "0px" }}
          >
            <img
              className="card-img-top"
              src="../../../assets/img/LRM_EXPORT_970470123229375_20200421_204651508.jpeg"
              alt="Card cap"
              style={{ height: "170px", width: "100%" }}
            />
          </div>
          <div
            className="col-12 mt-2"
            style={{ height: "170px", padding: "0px", }}
          >
            <img
              className="card-img-top"
              src="../../../assets/img/LRM_EXPORT_291501837237184_20190828_231830912.jpeg"
              alt="Card cap"
              style={{ height: "170px", width: "100%" }}
            />
          </div>
        </div>
        <div
          className="col-3 ml-2"
          style={{
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            padding: "0px",
          }}
        >
          <div
            className="col-12"
            style={{ height: "170px", padding: "0px",}}
          >
            <img
              className="card-img-top"
              src="../../../assets/img/LRM_EXPORT_646881793034951_20181030_130239030.jpeg"
              alt="Card cap"
              style={{ height: "170px", width: "100%" }}
            />
          </div>
          <div
            className="col-12 mt-2"
            style={{ height: "170px", padding: "0px",}}
          >
            <img
              className="card-img-top"
              src="../../../assets/img/LRM_EXPORT_680183195963080_20190910_130304264.jpeg"
              alt="Card cap"
              style={{ height: "170px", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
