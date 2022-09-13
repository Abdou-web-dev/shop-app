import { IconButton } from "@mui/material";

import * as React from "react";

function SmallBtnICon({ src, handleBtnClick }) {
  return (
    <IconButton className="icon_btn" onClick={handleBtnClick}>
      <img
        className="arrow_icon cross_icon"
        src={src}
        width="50px"
        height="50px"
        alt=""
      />
    </IconButton>
  );
}

export default SmallBtnICon;
