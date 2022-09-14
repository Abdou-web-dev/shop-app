import * as React from "react";
import WomensClothesList from "../components/clothes/WomensClothesList.js";
import WomensClothesListFiltered from "../components/clothes/WomensClothesListFiltered";
import Buttons from "./buttons/FilterButtons.js";
import IconColorButtons from "./buttons/IconColorButtons.js";
import SearchComponent from "./inputs/SearchComponent.js";
import "./styles.scss";
import { Collapse, IconButton, Tooltip, Modal } from "@mui/material";
import { getAllClothes } from "../services/dataFetcher";
import { WomenWearModal } from "./modals/WomenWearModal.jsx";

const clothes2 = [
  { name: "The Shawshank Redemption", year: 1994 },
  { name: "The Godfather", year: 1972 },
  { name: "The Godfather: Part II", year: 1974 },
  { name: "The Dark Knight", year: 2008 },
  { name: "12 Angry Men", year: 1957 },
  { name: "Schindler's List", year: 1993 },
  { name: "Pulp Fiction", year: 1994 },
  {
    name: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { name: "The Good, the Bad and the Ugly", year: 1966 },
  { name: "Fight Club", year: 1999 },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    name: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
];

const Womenswear = (props) => {
  const [clothes, setClothes] = React.useState("");
  //at first render of the page, fetch the data and then show the clothes
  React.useEffect(() => {
    getAllClothes()
      .then((data) => {
        setClothes(data);
      })
      .catch((error) => console.error(`Error:${error}`)); //if any error occured during the process, handle it here
    setopenModal(true);
    //close the modal 5 seconds later
    setTimeout(() => {
      setopenModal(false);
    }, 5500);
  }, []);
  const [openModal, setopenModal] = React.useState();

  //code to search for a specific garment among all garments displayed in the ui
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = clothes.filter((cloth) => {
        return (
          Object.values(cloth.name)
            // cloth.composition ?? how to search by composition also
            // releaseYear
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          Object.values(cloth.composition)
            // cloth.composition ?? how to search by composition also
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          Object.values(cloth.fit)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(clothes);
    }
  };

  //code for filtering the clothes based on some criteria
  const availableFits = [
    ...new Set(clothes.map && clothes?.map((cloth) => cloth.fit)),
  ];

  //the function that does the filter
  const filterItemByFit = (curcat) => {
    const newItems = clothes.filter((newVal) => {
      return newVal.fit === curcat;
      // comparing category for displaying data
    });
    setClothes(newItems);
  };

  const availableFabrics = [
    ...new Set(clothes.map && clothes?.map((cloth) => cloth.composition)),
  ];

  const filterItemByFabric = (currentFabric) => {
    const newItems = clothes.filter((cloth) => {
      return cloth.composition === currentFabric;
    });
    setClothes(newItems);
  };

  const availableColors = [
    ...new Set(clothes.map && clothes?.map((cloth) => cloth.colorPattern)),
  ];

  const filterItemByColor = (currentColor) => {
    const newItems = clothes.filter((cloth) => {
      return cloth.colorPattern === currentColor;
    });
    setClothes(newItems);
  };

  const availableYears = [
    ...new Set(clothes.map && clothes?.map((cloth) => cloth.releaseYear)),
  ];

  const filterItemByreleaseYear = (curYear) => {
    const newItemsYear = clothes.filter((cloth) => {
      return cloth.releaseYear === curYear;
    });
    setClothes(newItemsYear);
  };

  const [showSearchInput, setshowSearchInput] = React.useState(true);

  const [expandFilterMenu, setexpandFilterMenu] = React.useState(false);

  const handleFilterIconClick = () => {
    setexpandFilterMenu(!expandFilterMenu);
  };
  // if (show === true) setShow(false);
  // else if (show === false) setShow(true);
  // === setChecked((prev) => !prev);

  const handleOnHover = () => {
    console.log("hovered !!");
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleSelect = (index) => {
    console.log("selected");
    setSelectedIndex(index);
  };
  //how to make it that when the user clicks on one of the clothes in the dropdown , the corresponding fltered item shows ??
  const [collapsedSize, setcollapsedSize] = React.useState("50px");

  return (
    <div className="womens-wear-container">
      <div className="filter-icon" style={{ display: "inline-block" }}>
        <Tooltip title="Show filter options...">
          <IconButton
            onClick={handleFilterIconClick}
            sx={{ m: "10px 50px", color: "black", transform: "scale(1.2)" }}
          >
            {/* <FilterListIcon fontSize='large' /> */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/57/57164.png"
              alt=""
              width={25}
            />
          </IconButton>
        </Tooltip>
      </div>

      <Collapse
        orientation="vertical"
        className="collapse-wrapper"
        in={expandFilterMenu}
        collapsedSize={collapsedSize}
        sx={{ m: 1, border: ".5px solid lightgray", width: "99%" }}
      >
        <div
          className="filter-container"
          onMouseOver={() => setcollapsedSize("110px")}
          onMouseLeave={() => setcollapsedSize("50px")}
        >
          <div className="filter-grp-1">
            <span className="small-text">by Fit : </span>
            <div className="filter-btns">
              <Buttons
                onBtnsClick={() => setshowSearchInput(false)}
                filterItemsHandler={filterItemByFit}
                btns={availableFits}
              />
            </div>
          </div>

          <div className="filter-grp-2">
            <span className="small-text small-2">by Fabric nature : </span>
            <div className="filter-btns filter-btns2">
              <Buttons
                onBtnsClick={() => setshowSearchInput(false)}
                style={{ color: "black" }}
                filterItemsHandler={filterItemByFabric}
                btns={availableFabrics}
              />
            </div>
          </div>

          <div className="filter-grp-1 grp3">
            <span className="small-text">by Color : </span>
            <div
              className="filter-btns"
              style={{ background: "rgba(30, 70, 100,0.02)" }}
            >
              <IconColorButtons
                onBtnsClick={() => setshowSearchInput(false)}
                filterItemsHandler={filterItemByColor}
                btns={availableColors}
              />
            </div>
          </div>

          <div className="filter-grp-2 grp4">
            <span className="small-text small-2">by Year of release : </span>
            <div className="filter-btns filter-btns2">
              <Buttons
                onBtnsClick={() => setshowSearchInput(false)}
                style={{ color: "black" }}
                filterItemsHandler={filterItemByreleaseYear}
                btns={availableYears}
              />
            </div>
          </div>
        </div>
      </Collapse>

      <>
        <div className="search-component" style={{ marginTop: "50px" }}>
          {showSearchInput && <SearchComponent searchItems={searchItems} />}
          {/* passing searchItems function as props to SearchComponent Child*/}
        </div>
        {searchInput.length >= 1 ? ( // === if something is being typed in the search input field
          <WomensClothesListFiltered filteredResults={filteredResults} />
        ) : (
          <WomensClothesList
            noSearchInput={!showSearchInput}
            clothes={clothes}
          />
        )}
      </>

      <Modal
        disableRestoreFocus
        open={openModal}
        onClose={() => setopenModal(false)}
      >
        <div>
          <WomenWearModal handleCloseModal={() => setopenModal(false)} />
        </div>
      </Modal>
    </div>
  );
};

export default Womenswear;
