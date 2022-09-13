import { Tooltip, Button, IconButton } from "@mui/material";
import * as React from "react";
import Icons from "./Icons.js";
import Shop from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import "./styles.scss";

// press alt+96 for backticks
export const Context = React.createContext("");

//child component
const WomensClothesList = (props) => {
  //hopefully, container1 and container2 will sit next to each other
  let gradient1 = "linear-gradient(to right, #00416a, #e4e5e6)";

  const displayClothes = (props) => {
    // here, we are accepting the data 'clothes' coming from the parent component 'Womenswear' as props,
    const { clothes, noSearchInput } = props;
    const handleImgClick = () => {};

    if (clothes.length > 0) {
      return (
        clothes.map &&
        clothes?.map((cloth, index) => {
          return (
            <div
              key={index}
              className="women-clothes-container"
              style={{
                margin:
                  index % 2 === 0
                    ? "50px 25px 20px 80px"
                    : noSearchInput
                    ? "50px 50px 20px 80px"
                    : "",
                border: noSearchInput ? "0.5px solid #C4A484" : "",
                paddingLeft: noSearchInput === true ? "20px" : "100px",
                paddingRight: noSearchInput === true ? "35px" : "0px",
              }}
            >
              <div
                className="clothes-inner"
                style={{ border: noSearchInput ? ".1px solid lightgray" : "" }}
              >
                <Icons index={index} clothId={cloth.id} />
                {/* use useState to change the icon onClick ? like in netflix project... */}

                <img
                  src={cloth.url}
                  className="image"
                  onClick={handleImgClick}
                />

                <div
                  className="infos"
                  style={{
                    background:
                      index % 2 === 0
                        ? gradient1 //for even elements
                        : index === 7 ||
                          index === 13 ||
                          index === 19 ||
                          index === 22
                        ? "rgba(240, 240, 240, 0.212)"
                        : index % 2 !== 0
                        ? "rgba(144, 144, 185, 0.5)" //for odd elements
                        : "lightgray", //else
                  }}
                >
                  <span
                    className="name"
                    style={{ color: index % 2 === 0 ? "white" : "" }}
                  >
                    {cloth.name}{" "}
                  </span>
                  <Tooltip title="Fit" arrow={true} placement="top-start">
                    <span
                      className="fit"
                      style={{
                        color:
                          index % 2 === 0
                            ? "white"
                            : index === 7 ||
                              index === 13 ||
                              index === 19 ||
                              index === 22
                            ? "black"
                            : index % 2 !== 0
                            ? "white"
                            : "",
                      }}
                    >
                      {cloth.fit}
                    </span>
                  </Tooltip>
                  <Tooltip title="Price" arrow={true} placement="top-start">
                    <span
                      className="price"
                      style={{ color: index % 2 === 0 ? "white" : "" }}
                    >
                      {cloth.price}
                    </span>
                  </Tooltip>
                  <Tooltip title="Color" arrow={true} placement="top-start">
                    <span
                      className="color-pattern"
                      style={{ color: index % 2 === 0 ? "white" : "" }}
                    >
                      {cloth.colorPattern}
                    </span>
                  </Tooltip>
                  <Tooltip
                    title="Availability"
                    arrow={false}
                    placement="top-start"
                  >
                    <span
                      className="availabaility"
                      style={{ color: index % 2 === 0 ? "white" : "" }}
                    >
                      {cloth.inStock}
                    </span>
                  </Tooltip>
                  <Tooltip
                    title="Composition"
                    arrow={false}
                    placement="top-start"
                  >
                    <span
                      className="composition"
                      style={{ color: index % 2 === 0 ? "white" : "" }}
                    >
                      {cloth.composition}
                    </span>
                  </Tooltip>
                  <Tooltip
                    title="Year of release"
                    arrow={false}
                    placement="top-start"
                  >
                    <span
                      className="release-year"
                      style={{ color: index % 2 === 0 ? "white" : "" }}
                    >
                      {cloth.releaseYear}
                    </span>
                  </Tooltip>
                </div>

                {
                  //noSearchInput is false
                  noSearchInput && (
                    <div className="orders-btn-container">
                      <Link to="/orders">
                        <IconButton
                          sx={{
                            color: "brown",
                            padding: "0px 2px",
                            width: "60px",
                            height: "60px",
                          }}
                          className="order-btn"
                        >
                          <Shop className="shop-icon" />
                        </IconButton>
                      </Link>
                    </div>
                  )
                }
              </div>
            </div>
          );
        })
      );
    } else {
      return <h3 className="wait-msg">Please wait ...</h3>;
    }
  };

  return (
    <>
      {/* here, we are calling the function that uses map JS method and that dsplay the clothes */}
      {displayClothes(props)}
    </>
  );
};

export default WomensClothesList;
