import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function TrekMenu() {
  return (
    <div className="row" style={{ marginTop: "20%" }}>
      <div className="col-lg-2" style={{ marginLeft: "15%" }}>
        <div className="card" style={{ width: "20rem", height: "500px" }}>
          <img
            className="card-img-top"
            src="../../../assets/img/Alpinist4.svg"
            alt="Card cap"
          />
          <div className="card-body">
            <h4 className="card-title">Treks</h4>
            <p className="card-text">Hit the list of treks</p>
            <Link to="/search/treks" className="btn btn-primary">
              Find where you want to trek
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-2 offset-md-1">
        <div className="card" style={{ width: "20rem", height: "500px" }}>
          <img
            img
            className="card-img-top"
            src="../../../assets/img/Offroad Adventure.svg"
            alt="Card cap"
          />
          <div className="card-body">
            <h4 className="card-title">Expeditions</h4>
            <p className="card-text">Explore the wild</p>
            <Link to="/search/expeditions" className="btn btn-primary">
              Find what you want to expedite
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-2 offset-md-1">
        <div className="card" style={{ width: "20rem", height: "500px" }}>
          <img
            img
            className="card-img-top"
            src="../../../assets/img/Kids Sliding Down A Zipline.svg"
            alt="Card cap"
          />
          <div className="card-body">
            <h4 className="card-title">Adventures</h4>
            <p className="card-text">Adventure more worry less</p>
            <Link to="/search/adventures" className="btn btn-primary">
              Find your next adventure destination
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
