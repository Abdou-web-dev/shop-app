import { Box, IconButton } from "@mui/material";
import * as React from "react";
import "./styles.scss";

const IconColorButtons = ({ btns, filterItemsHandler, onBtnsClick }) => {
  //
  const handleFilterColoredBtnClick = (iconBtn) => {
    filterItemsHandler(iconBtn); //to do filter functionality
    onBtnsClick(); // to hide the search input
  };

  return (
    <div className="filer-btn-container">
      {btns.map((iconBtn, id) => {
        return (
          <IconButton
            className="filter-btn"
            onClick={() => {
              handleFilterColoredBtnClick(iconBtn);
            }}
            key={id}
          >
            <Box
              sx={{
                width: "30px",
                height: "30px",
                background:
                  iconBtn === "White"
                    ? "white"
                    : iconBtn === "Black/small flowers"
                    ? "url(https://i.ibb.co/hZnYt7W/pic6.png)"
                    : iconBtn === "Greige/Floral"
                    ? "#d3d3d346"
                    : iconBtn === "Pink/floral"
                    ? "rgba(255, 192, 203, 0.467)"
                    : iconBtn === "Yellow/Floral"
                    ? "rgba(249, 249, 35, 0.45)"
                    : iconBtn === "Green/Floral"
                    ? "rgba(34, 149, 34,0.5)"
                    : iconBtn === "Cream/Floral"
                    ? "white"
                    : iconBtn === "Brown"
                    ? "brown"
                    : iconBtn === "Black"
                    ? "black"
                    : iconBtn === "Yellow/Floral"
                    ? "white"
                    : "",
                "&:hover": {
                  transform: "scale(1.45)",
                  background:
                    iconBtn === "Greige/Floral"
                      ? "url(https://i.ibb.co/r4msvFB/Picture1.png)"
                      : iconBtn === "Pink/floral"
                      ? "url(https://i.ibb.co/8NMyb9s/pic2.png)"
                      : iconBtn === "Yellow/Floral"
                      ? "url(https://i.ibb.co/PTLjdRM/pic3.png)"
                      : iconBtn === "Green/Floral"
                      ? "url(https://i.ibb.co/SrmYZGp/pic4.png)"
                      : iconBtn === "Cream/Floral"
                      ? "url(https://i.ibb.co/74Z9TMm/pic5.png) no-repeat center center/contain"
                      : iconBtn === ""
                      ? "url()"
                      : iconBtn === "Pink/floral"
                      ? "url()"
                      : iconBtn === "Pink/floral"
                      ? "url()"
                      : "",
                },
              }}
            ></Box>
          </IconButton>
        );
      })}
    </div>
  );
};

export default IconColorButtons;
