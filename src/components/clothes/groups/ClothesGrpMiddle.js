import * as React from "react";
import { Button } from "@mui/material";
import "./styles.scss";
import "./styles.css";

const ClothesGrpMiddle = ({ clothes, handleClickGarmentMiddleBtn }) => {
  return (
    <div className="clothes-names-grp-middle">
      <div className="inner">
        {clothes.map &&
          clothes?.map(
            (item, index) =>
              index >= 8 &&
              index < 16 && (
                <div key={index} className="btn-wrapper">
                  <Button
                    onClick={(e) => handleClickGarmentMiddleBtn(index, e)} //() => anonymous fnct must recieve no arg,except event
                    className="cloth-name-left-btn middle-btn"
                  >
                    <span style={{ color: "indigo" }}> {item.name}</span>
                  </Button>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default ClothesGrpMiddle;
