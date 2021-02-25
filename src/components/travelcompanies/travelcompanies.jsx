import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function TravelCompanies(props) {
  const Items = props.items;
  //console.log(props);
  return (
    <React.Fragment>
      <div className="container-fluid">
      <div className="row" style={{ marginTop: "10%" }}>
        {Items.map((item) => {
          return (
            
              <div className="col-3" key={item._id} link>
                <div className="card" style={{ width: "100%",borderRadius:"40px" }}>
                  <img
                    className="card-img-top"
                    src="../../../assets/img/Alpinist4.svg"
                    alt="Card cap"
                    style={{ width: "100%",borderRadius:"40px" }}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
          );
        })}
        </div>
      </div>
    </React.Fragment>
  );
}
