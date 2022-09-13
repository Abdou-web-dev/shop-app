import { Button } from "@mui/material";
import * as React from "react";
import "./styles.scss";

const Buttons = ({ btns, filterItemsHandler, style, onBtnsClick }) => {
  // let numArray = new Float64Array(availableYears);
  // numArray = numArray.sort();
  const handleFilterBtnClick = (Val) => {
    filterItemsHandler(Val);
    onBtnsClick();
  };

  return (
    <>
      <div className="filer-btn-container">
        {btns.map((Val, id) => {
          return (
            <Button
              className="filter-btn"
              onClick={() => handleFilterBtnClick(Val)}
              key={id}
              sx={{
                "&:hover": {
                  transform:
                    Val === 2015 ||
                    Val === 2016 ||
                    Val === 2017 ||
                    Val === 2018 ||
                    Val === 2019 ||
                    Val === 2020 ||
                    Val === 2021 ||
                    Val === 2022
                      ? "scale(1.35)"
                      : "",
                },
              }}
            >
              <span style={style}> {Val}</span>
            </Button>
          );
        })}

        {/* <button
                    className="" //not working
                    onClick={() => setClothes(clothes)}>
                    All
                </button> */}
      </div>
    </>
  );
};

export default Buttons;

{
  /* <Typography sx={{
    '&:hover': {
        fontSize: Val === 2015 || Val === 2016 || Val === 2017 || Val === 2018 || Val === 2019 || Val === 2020
            || Val === 2021 || Val === 2022 ? '42px' : ""
    }
}}>
    {Val}
</Typography> */
}
