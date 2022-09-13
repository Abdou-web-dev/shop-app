import * as React from "react";
import { Button } from "@mui/material";
import "./styles.scss";
import "./styles.css";

const ClothesGrpLeft = ({ clothes, handleClickGarmentLeftBtn }) => {
  return (
    <div className="clothes-names-grp-left">
      <div className="inner">
        {clothes.map &&
          clothes?.map(
            (item, index) =>
              index >= 0 &&
              index < 8 && (
                <div key={index} className="btn-wrapper">
                  <Button
                    onClick={(e) => handleClickGarmentLeftBtn(index, e)} //() => anonymous fnct must recieve no arg,except event
                    className="cloth-name-left-btn"
                  >
                    <span>{item.name}</span>
                  </Button>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default ClothesGrpLeft;
