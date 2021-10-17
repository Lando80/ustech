import React from "react";

import LogoPath from "../assets/logo.png";

function Logo(props) {
  return <img src={LogoPath} style={{ width: props.width }} alt="SEMEF Logo" />;
}

export default Logo;
