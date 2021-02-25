import React from "react";
import Carousal from "../carousal/carousal";
import TrekMenu from "../trekmenu/trekmenu";

export default function Home() {
  return (
    <React.Fragment>
      <Carousal></Carousal>
      <TrekMenu></TrekMenu>
    </React.Fragment>
  );
}
