import * as React from "react";
import { Button } from "@mui/material";
import "./styles.scss";
import "./styles.css";

const ClothesGrpRight = ({ clothes, handleClickGarmentRightBtn }) => {
  return (
    <div className="clothes-names-grp-right">
      <div className="inner">
        {clothes.map &&
          clothes?.map(
            (item, index) =>
              index >= 16 &&
              index < 24 && (
                <div key={index} className="btn-wrapper">
                  <Button
                    onClick={(e) => handleClickGarmentRightBtn(index, e)} //() => anonymous fnct must recieve no arg,except event
                    className="cloth-name-left-btn right-btn"
                  >
                    <span> {item.name}</span>
                  </Button>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default ClothesGrpRight;
