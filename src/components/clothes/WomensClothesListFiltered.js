import { Button, Tooltip } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
// press alt+96 for backticks

export const Context = React.createContext("");

//child component
const WomensClothesListFiltered = (props) => {
  //code to change order of certain filtered results inner elements on hover
  const [containerDisplay, setcontainerDisplay] = React.useState("initial");
  const [imageOrder, setimageOrder] = React.useState("initial");
  const [likeOrder, setlikeOrder] = React.useState("initial");
  const [infosOrder, setinfosOrder] = React.useState("initial");

  const containerHoverHandle = (id) => {
    if (id === "3" || id === "7") {
      setcontainerDisplay("flex");
      setimageOrder("2");
      setlikeOrder("3");
      setinfosOrder("1");
    }
  };
  const containerMouseLeaveHandle = (id) => {
    if (id === "3" || id === "7") {
      setcontainerDisplay("flex");
      setimageOrder("1");
      setlikeOrder("3");
      setinfosOrder("2");
    }
  };
  let gradient1 = "linear-gradient(to right, #00416a, #e4e5e6)";

  return (
    <>
      {props.filteredResults &&
        props.filteredResults?.map((clothFiltered, index) => (
          <div
            key={index}
            className="women-clothes-container women-filtered-clothes-container"
            style={{
              border: "1px solid indigo",
              background: "rgba(245, 245, 220, 0.2)",
              margin: index % 2 === 0 ? "50px 25px 20px 80px" : "",
            }}
          >
            <div
              onMouseOver={() => containerHoverHandle(clothFiltered.id)}
              onMouseLeave={() => containerMouseLeaveHandle(clothFiltered.id)}
              className="clothes-inner"
              id={clothFiltered.id}
              style={{
                display:
                  clothFiltered.id === "3" || clothFiltered.id === "7"
                    ? containerDisplay
                    : "",
                flexDirection:
                  (clothFiltered.id === "3" || clothFiltered.id === "7") &&
                  containerDisplay === "flex"
                    ? "column"
                    : "",
              }}
            >
              {/* apply an overlay to each image on hover */}
              <div
                className="image-with-text"
                style={{ order: imageOrder, marginLeft: "67px" }}
              >
                <span
                  className={
                    index % 2 === 0
                      ? "overlay-gray-shades"
                      : "overlay-white-shades"
                  }
                >
                  <img src={clothFiltered.url} className="image" />
                </span>
                <span className="name-filtered">{clothFiltered.name} </span>
              </div>

              <div
                className="infos"
                style={{
                  marginLeft: "18px",
                  order: infosOrder,
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
                  {clothFiltered.name}{" "}
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
                    {clothFiltered.fit}
                  </span>
                </Tooltip>
                <Tooltip title="Price" arrow={true} placement="top-start">
                  <span
                    className="price"
                    style={{ color: index % 2 === 0 ? "white" : "" }}
                  >
                    {clothFiltered.price}
                  </span>
                </Tooltip>
                <Tooltip title="Color" arrow={true} placement="top-start">
                  <span
                    className="color-pattern"
                    style={{ color: index % 2 === 0 ? "white" : "" }}
                  >
                    {clothFiltered.colorPattern}
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
                    {clothFiltered.inStock}
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
                    {clothFiltered.composition}
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
                    {clothFiltered.releaseYear}
                  </span>
                </Tooltip>
              </div>

              {/* markup to be adapted later, that displays a hidden div on the left on hover , change it to rigt.... , see css*/}
              <div className="orders-section">
                <div className="like-it-wrapper" style={{ order: likeOrder }}>
                  <div className="text">
                    <span className="like-it-text-shown">Like it ?</span>
                  </div>

                  <div className="like-it-overlay">
                    <Link to="/orders">
                      <Button
                        onClick={() =>
                          props.childToParent(
                            props.filteredResults.filter(
                              (clothFiltered) => clothFiltered.id
                            )
                          )
                        }
                        sx={{
                          padding: "0px 2px",
                          width: "138px",
                          height: "50px",
                        }}
                        className="order-btn"
                      >
                        <span className="order-text-hidden">Order it!</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default WomensClothesListFiltered;

//arrived heree <div>lorem10</div>
