import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { searchContext } from "../../contexts/searchcontext";



export default function Items(props) {
  //const [count, setCount] = useState([]);
  // useEffect(
  //     () => {
  //       const subscription = props.source.subscribe();
  //       return () => {
  //         subscription.unsubscribe();
  //       };
  //     },
  //     [props.source],
  //   );

  const searchState = useContext(searchContext);
  //console.log("kaltsk",searchState);
  //const { dispatch } = searchState;
  function searchCompanies() {
     
  }
  
  const Items = props.items;
  console.log(props);
  return (
    <React.Fragment>
      <div className="container-fluid">
      <div className="row" style={{ marginTop: "10%" }}>
        {searchState.items?.map((item) => {
          return (
            <Link to="/search/companies" className="col-lg-3">
              <div key={item._id} link>
                <div className="card" style={{ width: "100%",borderRadius:"40px" }}>
                  <img
                    className="card-img-top"
                    src="../../../assets/img/Offroad Adventure.svg"
                    alt="Card cap"
                    style={{ width: "100%",borderRadius:"40px" }}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    </React.Fragment>
  );
}
