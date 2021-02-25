import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Items from "../items/items";
import TravelCompanies from "../travelcompanies/travelcompanies";
import Search from "../search/search";
import { searchContext } from "../../contexts/searchcontext";

export default function Container(props) {
    const [items, setItems] = useState([]);
  const searchState = useContext(searchContext);
  //const { dispatch } = searchState;

//   let setItems = (items) => {
//        console.log({items})
//   };
  
  return (
    <React.Fragment>
      <Search setItems={setItems}></Search>
      <Route path="/search/treks">
        <searchContext.Provider value={{items}}>
          <Items></Items>
        </searchContext.Provider>
      </Route>
      <Route path="/search/companies">
        <searchContext.Provider value={{}}>
          <TravelCompanies></TravelCompanies>
        </searchContext.Provider>
      </Route>
    </React.Fragment>
  );
}
