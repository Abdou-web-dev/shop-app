import { Divider, Modal, Popover, Button } from "@mui/material";
import * as React from "react";
import { getAllClothes, getAllClothesUrls } from "../../services/dataFetcher";
import ArrowIcon from "../buttons/SmallBtnICon";
import CloseIcon from "../buttons/SmallBtnICon";
import ClothesGrpLeft from "../clothes/groups/ClothesGrpLeft.js";
import ClothesGrpMiddle from "../clothes/groups/ClothesGrpMiddle.js";
import ClothesGrpRight from "../clothes/groups/ClothesGrpRight.js";
import PopoverImage from "../images/PopoverImage";
import cross_icon from "../../assets/images/cross.png";
import ItemToPurchase from "../purchase/ItemToPurchase";
import "./ordersStyles.scss";

const Orders = () => {
  const [clothes, setClothes] = React.useState([]);
  //at first render of the page, fetch the data and then show the clothes
  React.useEffect(() => {
    getAllClothes()
      .then((data) => {
        setClothes(data);
      })
      .catch((error) => console.error(`Error:${error}`)); //if any error occured during the process, handle it here
  }, []);

  const [clothesUrls, setClothesUrls] = React.useState([]);

  React.useEffect(() => {
    getAllClothesUrls()
      .then((data) => {
        setClothesUrls(data);
      })
      .catch((error) => console.error(`Error:${error}`)); //if any error occured during the process, handle it here
  }, []);

  //left grp, all these variables are arrays that contain 1 item each
  const item1 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Fine-knit Cotton Dress");
  const item1Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Fine-knit Cotton Dress" && elem.id === 1
    );

  const item2 =
    clothes.filter && clothes?.filter((cloth) => cloth.name === "Light Dress");
  const item2Urls =
    clothesUrls.filter &&
    clothesUrls?.filter((elem) => elem.name === "Light Dress" && elem.id === 2);

  const item3 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "V-neck linen-blend");
  const item3Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "V-neck linen-blend" && elem.id === 3
    );

  const item4 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Smocked cotton dress");
  const item4Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Smocked cotton dress" && elem.id === 4
    );

  const item5 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Cropped off-the-shoulder top");
  const item5Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Cropped off-the-shoulder top" && elem.id === 5
    );

  const item6 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Long Halterneck Dress");
  const item6Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Long Halterneck Dress" && elem.id === 6
    );

  const item7 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Boxy Cardigan");
  const item7Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Boxy Cardigan" && elem.id === 7
    );

  const item8 =
    clothes.filter && clothes?.filter((cloth) => cloth.name === "Dress Pants");
  const item8Urls =
    clothesUrls.filter &&
    clothesUrls?.filter((elem) => elem.name === "Dress Pants" && elem.id === 8);

  //middle grp
  const item9 =
    clothes.filter && clothes?.filter((cloth) => cloth.name === "Short jacket");
  const item9Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Short jacket" && elem.id === 9
    );

  const item10 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Tie Belt Shirt Dress");
  const item10Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Tie Belt Shirt Dress" && elem.id === 10
    );

  const item11 =
    clothes.filter && clothes?.filter((cloth) => cloth.name === "Denim Dress");
  const item11Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Denim Dress" && elem.id === 11
    );

  const item12 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Crinkled Pants");
  const item12Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Crinkled Pants" && elem.id === 12
    );

  const item13 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Knitted collared top");
  const item13Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Knitted collared top" && elem.id === 13
    );

  const item14 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Crinkled Straight trousers");
  const item14Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Crinkled Straight trousers" && elem.id === 14
    );

  const item15 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Denim Shorts High Waist");
  const item15Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Denim Shorts High Waist" && elem.id === 15
    );

  const item16 =
    clothes.filter &&
    clothes?.filter((cloth) => cloth.name === "Tie-belt Jumpsuit");
  const item16Urls =
    clothesUrls.filter &&
    clothesUrls?.filter(
      (elem) => elem.name === "Tie-belt Jumpsuit" && elem.id === 16
    );

  // console.log(item1Urls);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  //for popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  //left group
  const [item1Show, setitem1Show] = React.useState(false);
  const [item3Show, setitem3Show] = React.useState(false);
  const [item5Show, setitem5Show] = React.useState(false);
  const [item7Show, setitem7Show] = React.useState(false);
  const [item2Show, setitem2Show] = React.useState(false);
  const [item4Show, setitem4Show] = React.useState(false);
  const [item6Show, setitem6Show] = React.useState(false);
  const [item8Show, setitem8Show] = React.useState(false);

  //middle group
  const [item9Show, setitem9Show] = React.useState(false);
  const [item10Show, setitem10Show] = React.useState(false);
  const [item11Show, setitem11Show] = React.useState(false);
  const [item12Show, setitem12Show] = React.useState(false);
  const [item13Show, setitem13Show] = React.useState(false);
  const [item14Show, setitem14Show] = React.useState(false);
  const [item15Show, setitem15Show] = React.useState(false);
  const [item16Show, setitem16Show] = React.useState(false);

  //the same Modal and Popover Mui components are used for all the images
  const handleClickGarmentLeftBtn = (clothIndex, event) => {
    if (clothIndex === 0) {
      handleOpenModal(); //for the modal
      hideOddElements();
      setitem1Show(true);
    } else if (clothIndex === 1) {
      setAnchorEl(event.currentTarget); //open popover
      hideEvenElements();
      setitem2Show(true);
    } else if (clothIndex === 2) {
      handleOpenModal();
      hideOddElements();
      setitem3Show(true);
    } else if (clothIndex === 3) {
      setAnchorEl(event.currentTarget);
      hideEvenElements();
      setitem4Show(true);
    } else if (clothIndex === 4) {
      handleOpenModal();
      hideOddElements();
      setitem5Show(true);
    } else if (clothIndex === 5) {
      setAnchorEl(event.currentTarget);
      hideEvenElements();
      setitem6Show(true);
    } else if (clothIndex === 6) {
      handleOpenModal();
      hideOddElements();
      setitem7Show(true);
    } else if (clothIndex === 7) {
      setAnchorEl(event.currentTarget);
      hideEvenElements();
      setitem8Show(true);
    }
  };
  function hideOddElements() {
    setitem11Show(false);
    setitem13Show(false);
    setitem15Show(false);
    setitem1Show(false);
    setitem3Show(false);
    setitem5Show(false);
    setitem7Show(false);
    setitem9Show(false);
  }
  function hideEvenElements() {
    setitem12Show(false);
    setitem14Show(false);
    setitem16Show(false);
    setitem2Show(false);
    setitem4Show(false);
    setitem6Show(false);
    setitem8Show(false);
    setitem10Show(false);
  }

  const handleClickGarmentMiddleBtn = (clothIndex, event) => {
    //the same Modal and Popover Mui components are used for all the images
    switch (clothIndex) {
      case 8:
        handleOpenModal(); //for the modal
        hideOddElements();
        setitem9Show(true);
        break;
      case 9:
        setAnchorEl(event.currentTarget); //open popover
        hideEvenElements();
        setitem10Show(true);
        break;
      case 10:
        handleOpenModal();
        hideOddElements();
        setitem11Show(true);
        break;
      case 11:
        setAnchorEl(event.currentTarget);
        hideEvenElements();
        setitem12Show(true);
        break;
      case 12:
        handleOpenModal();
        hideOddElements();
        setitem13Show(true);
        break;
      case 13:
        setAnchorEl(event.currentTarget);
        hideEvenElements();
        setitem14Show(true);
        break;
      case 14:
        handleOpenModal();
        hideOddElements();
        setitem15Show(true);
        break;
      case 15:
        setAnchorEl(event.currentTarget);
        hideEvenElements();
        setitem16Show(true);
        break;
      default:
        break;
    }
  };

  const handleClickGarmentRightBtn = () => {
    console.log("ok");
  };

  //for scrolling
  const myRef = React.useRef(null);

  const executeScrollPopover = () => {
    myRef.current.scrollIntoView();
    setTimeout(() => {
      handleClosePopover();
    }, 200);
  };
  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
    setTimeout(() => {
      handleCloseModal();
    }, 200);
  };
  const executeScrollModal = (ref) => {
    scrollToRef(myRef);
  };

  const hideOtherItems = () => {
    setshowItem2Purchase(false);
    setshowItem1Purchase(false);
    setshowItem3Purchase(false);
    setshowItem4Purchase(false);
  };
  const handleArrowBtnClickModal = (myId) => {
    if (myId === "1") {
      setshowItem1Purchase(true);
      setshowItem2Purchase(false);
      executeScrollModal();
    } else if (myId === "3") {
      setshowItem2Purchase(true);
      setshowItem1Purchase(false);
      executeScrollModal();
    } else if (myId === "5") {
      setshowItem2Purchase(false);
      setshowItem1Purchase(false);
      setshowItem3Purchase(true);
      executeScrollModal();
    } else if (myId === "7") {
      setshowItem2Purchase(false);
      setshowItem1Purchase(false);
      setshowItem3Purchase(false);
      setshowItem4Purchase(true);
      executeScrollModal();
    } else if (myId === "9") {
      setshowItem5Purchase(true);
      setshowItem6Purchase(false);
      setshowItem7Purchase(false);
      setshowItem8Purchase(false);
      hideOtherItems();
      executeScrollModal();
    } else if (myId === "11") {
      setshowItem5Purchase(false);
      setshowItem6Purchase(true);
      setshowItem7Purchase(false);
      setshowItem8Purchase(false);
      hideOtherItems();
      executeScrollModal();
    } else if (myId === "13") {
      setshowItem5Purchase(false);
      setshowItem6Purchase(false);
      setshowItem7Purchase(true);
      setshowItem8Purchase(false);
      hideOtherItems();
      executeScrollModal();
    } else if (myId === "15") {
      setshowItem5Purchase(false);
      setshowItem6Purchase(false);
      setshowItem7Purchase(false);
      setshowItem8Purchase(true);
      hideOtherItems();
      executeScrollModal();
    }
  };

  const handleArrowBtnClickPopover = (myId) => {
    if (myId === "2") {
      setshowItem9Purchase(true);
      executeScrollPopover();
    } else if (myId === "4") {
      executeScrollPopover();
    } else if (myId === "6") {
      executeScrollPopover();
    } else if (myId === "8") {
      executeScrollPopover();
    } else if (myId === "10") {
      hideOtherItems();
      executeScrollPopover();
    } else if (myId === "12") {
      hideOtherItems();
      executeScrollPopover();
    } else if (myId === "14") {
      hideOtherItems();
      executeScrollPopover();
    } else if (myId === "16") {
      hideOtherItems();
      executeScrollPopover();
    }
  };

  const [showItem1Purchase, setshowItem1Purchase] = React.useState(false);
  const [showItem2Purchase, setshowItem2Purchase] = React.useState(false);
  const [showItem3Purchase, setshowItem3Purchase] = React.useState(false);
  const [showItem4Purchase, setshowItem4Purchase] = React.useState(false);
  const [showItem5Purchase, setshowItem5Purchase] = React.useState(false);
  const [showItem6Purchase, setshowItem6Purchase] = React.useState(false);
  const [showItem7Purchase, setshowItem7Purchase] = React.useState(false);
  const [showItem8Purchase, setshowItem8Purchase] = React.useState(false);
  //
  const [showItem9Purchase, setshowItem9Purchase] = React.useState(false);
  const [showItem10Purchase, setshowItem10Purchase] = React.useState(false);
  const [showItem11Purchase, setshowItem11Purchase] = React.useState(false);
  const [showItem12Purchase, setshowItem12Purchase] = React.useState(false);
  const [showItem13Purchase, setshowItem13Purchase] = React.useState(false);
  const [showItem14Purchase, setshowItem14Purchase] = React.useState(false);
  const [showItem15Purchase, setshowItem15Purchase] = React.useState(false);
  const [showItem16Purchase, setshowItem16Purchase] = React.useState(false);

  return (
    <div className="orders-clothes-list-container">
      <div className="text-wrapper">
        <span>Which item would you like to order ?</span>
      </div>

      <div className="orders-clothes-list">
        <ClothesGrpLeft
          // scrollTo={executeScroll}
          clothes={clothes}
          handleClickGarmentLeftBtn={handleClickGarmentLeftBtn}
        ></ClothesGrpLeft>

        <Divider
          className="divider"
          orientation="vertical"
          variant="fullWidth"
        ></Divider>

        <ClothesGrpMiddle
          clothes={clothes}
          handleClickGarmentMiddleBtn={handleClickGarmentMiddleBtn}
        />

        <Divider
          className="divider"
          orientation="vertical"
          variant="fullWidth"
        ></Divider>

        <ClothesGrpRight
          clothes={clothes}
          handleClickGarmentRightBtn={handleClickGarmentRightBtn}
        />
      </div>
      <div className="modal">
        <Modal
          disableRestoreFocus
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal-inner">
            <div className="modal-content">
              {item1Show === true &&
                item1?.map((filteredItem, index) => (
                  <div key={index} className="modal-image-wrapper">
                    <img
                      className="modal_image"
                      src={filteredItem.url}
                      alt=""
                    />
                    <CloseIcon
                      handleBtnClick={handleCloseModal}
                      src={cross_icon}
                    />
                    <ArrowIcon
                      handleBtnClick={() =>
                        handleArrowBtnClickModal(filteredItem.id)
                      }
                      src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                    />
                  </div>
                ))}
            </div>
            <div className="modal-content">
              {item3Show &&
                item3?.map((filteredItem, index) => (
                  <div key={index} className="modal-image-wrapper">
                    <img
                      className="modal_image"
                      src={filteredItem.url}
                      alt=""
                    />
                    <CloseIcon
                      handleBtnClick={handleCloseModal}
                      src={cross_icon}
                    />
                    <ArrowIcon
                      handleBtnClick={() =>
                        handleArrowBtnClickModal(filteredItem.id)
                      }
                      src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                    />
                  </div>
                ))}
            </div>
            <div className="modal-content">
              {item5Show &&
                item5?.map((filteredItem, index) => (
                  <div key={index} className="modal-image-wrapper">
                    <img
                      src={filteredItem.url}
                      alt=""
                      className="modal_image"
                    />
                    <CloseIcon
                      handleBtnClick={handleCloseModal}
                      src={cross_icon}
                    />
                    <ArrowIcon
                      handleBtnClick={() =>
                        handleArrowBtnClickModal(filteredItem.id)
                      }
                      src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                    />
                  </div>
                ))}
            </div>
            <div className="modal-content">
              {item7Show &&
                item7?.map((filteredItem, index) => (
                  <div key={index} className="modal-image-wrapper">
                    <img
                      className="modal_image"
                      src={filteredItem.url}
                      alt=""
                    />
                    <CloseIcon
                      handleBtnClick={handleCloseModal}
                      src={cross_icon}
                    />
                    <ArrowIcon
                      handleBtnClick={() =>
                        handleArrowBtnClickModal(filteredItem.id)
                      }
                      src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                    />
                  </div>
                ))}
            </div>
            <div className="modal-content">
              {item9Show &&
                item9?.map((filteredItem, index) => (
                  <div key={index} className="modal-image-wrapper">
                    <img
                      className="modal_image"
                      src={filteredItem.url}
                      alt=""
                    />
                    <CloseIcon
                      handleBtnClick={handleCloseModal}
                      src={cross_icon}
                    />
                    <ArrowIcon
                      handleBtnClick={() =>
                        handleArrowBtnClickModal(filteredItem.id)
                      }
                      src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                    />
                  </div>
                ))}
            </div>
            <div className="modal-content">
              {item11Show &&
                item11?.map((filteredItem, index) => (
                  <div key={index} className="modal-image-wrapper">
                    <img
                      className="modal_image"
                      src={filteredItem.url}
                      alt=""
                    />
                    <CloseIcon
                      handleBtnClick={handleCloseModal}
                      src={cross_icon}
                    />
                    <ArrowIcon
                      handleBtnClick={() =>
                        handleArrowBtnClickModal(filteredItem.id)
                      }
                      src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                    />
                  </div>
                ))}
            </div>
            <div className="modal-content">
              {item13Show &&
                item13?.map((filteredItem, index) => (
                  <div key={index} className="modal-image-wrapper">
                    <img
                      className="modal_image"
                      src={filteredItem.url}
                      alt=""
                    />
                    <CloseIcon
                      handleBtnClick={handleCloseModal}
                      src={cross_icon}
                    />
                    <ArrowIcon
                      handleBtnClick={() =>
                        handleArrowBtnClickModal(filteredItem.id)
                      }
                      src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                    />
                  </div>
                ))}
            </div>
            <div className="modal-content">
              {item15Show &&
                item15?.map((filteredItem, index) => (
                  <div key={index} className="modal-image-wrapper">
                    <img
                      className="modal_image"
                      src={filteredItem.url}
                      alt=""
                    />
                    <CloseIcon
                      handleBtnClick={handleCloseModal}
                      src={cross_icon}
                    />
                    <ArrowIcon
                      handleBtnClick={() =>
                        handleArrowBtnClickModal(filteredItem.id)
                      }
                      src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                    />
                  </div>
                ))}
            </div>
          </div>
        </Modal>
      </div>
      <div className="popover">
        <Popover
          //If true, the modal will not restore focus to previously focused element once modal is hidden or unmounted.
          disableRestoreFocus
          id="popover"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div className="popover-content">
            {item2Show === true &&
              item2?.map((filteredItem, index) => (
                <div key={index} className="popover_wrapper">
                  <PopoverImage
                    className="popover_img border"
                    src={filteredItem.url}
                  />
                  <ArrowIcon
                    handleBtnClick={() =>
                      handleArrowBtnClickPopover(filteredItem.id)
                    }
                    src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                  />
                </div>
              ))}
          </div>
          <div className="popover-content">
            {item4Show &&
              item4?.map((filteredItem, index) => (
                <div key={index} className="popover_wrapper">
                  <PopoverImage
                    className="popover_img"
                    src={filteredItem.url}
                  />
                  <ArrowIcon
                    handleBtnClick={() =>
                      handleArrowBtnClickPopover(filteredItem.id)
                    }
                    src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                  />
                </div>
              ))}
          </div>
          <div className="popover-content">
            {item6Show &&
              item6?.map((filteredItem, index) => (
                <div key={index} className="popover_wrapper">
                  <PopoverImage
                    className="popover_img border"
                    src={filteredItem.url}
                  />
                  <ArrowIcon
                    handleBtnClick={() =>
                      handleArrowBtnClickPopover(filteredItem.id)
                    }
                    src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                  />
                </div>
              ))}
          </div>
          <div className="popover-content">
            {item8Show &&
              item8?.map((filteredItem, index) => (
                <div key={index} className="popover_wrapper">
                  <PopoverImage
                    className="popover_img"
                    src={filteredItem.url}
                  />
                  <ArrowIcon
                    handleBtnClick={() =>
                      handleArrowBtnClickPopover(filteredItem.id)
                    }
                    src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                  />
                </div>
              ))}
          </div>

          <div className="popover-content">
            {item10Show === true &&
              item10?.map((filteredItem, index) => (
                <div key={index} className="popover_wrapper">
                  <PopoverImage
                    className="popover_img border"
                    src={filteredItem.url}
                  />
                  <ArrowIcon
                    handleBtnClick={() =>
                      handleArrowBtnClickPopover(filteredItem.id)
                    }
                    src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                  />
                </div>
              ))}
          </div>
          <div className="popover-content">
            {item12Show &&
              item12?.map((filteredItem, index) => (
                <div key={index} className="popover_wrapper">
                  <PopoverImage
                    className="popover_img"
                    src={filteredItem.url}
                  />
                  <ArrowIcon
                    handleBtnClick={() =>
                      handleArrowBtnClickPopover(filteredItem.id)
                    }
                    src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                  />
                </div>
              ))}
          </div>
          <div className="popover-content">
            {item14Show &&
              item14?.map((filteredItem, index) => (
                <div key={index} className="popover_wrapper">
                  <PopoverImage
                    className="popover_img border"
                    src={filteredItem.url}
                  />
                  <ArrowIcon
                    handleBtnClick={() =>
                      handleArrowBtnClickPopover(filteredItem.id)
                    }
                    src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                  />
                </div>
              ))}
          </div>
          <div className="popover-content">
            {item16Show &&
              item16?.map((filteredItem, index) => (
                <div key={index} className="popover_wrapper">
                  <PopoverImage
                    className="popover_img"
                    src={filteredItem.url}
                  />
                  <ArrowIcon
                    handleBtnClick={() =>
                      handleArrowBtnClickPopover(filteredItem.id)
                    }
                    src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                  />
                </div>
              ))}
          </div>
        </Popover>
      </div>

      <div className="seen">
        {showItem1Purchase === true ? (
          //modal items, odd elements
          <ItemToPurchase clothesUrls={item1Urls} garment={item1} ref={myRef} />
        ) : showItem2Purchase === true ? (
          <ItemToPurchase clothesUrls={item3Urls} garment={item3} ref={myRef} />
        ) : showItem3Purchase === true ? (
          <ItemToPurchase clothesUrls={item5Urls} garment={item5} ref={myRef} />
        ) : showItem4Purchase === true ? (
          <ItemToPurchase clothesUrls={item7Urls} garment={item7} ref={myRef} />
        ) : showItem5Purchase === true ? (
          <ItemToPurchase clothesUrls={item9Urls} garment={item9} ref={myRef} />
        ) : showItem6Purchase === true ? (
          <ItemToPurchase
            clothesUrls={item11Urls}
            garment={item11}
            ref={myRef}
          />
        ) : showItem7Purchase === true ? (
          <ItemToPurchase
            clothesUrls={item13Urls}
            garment={item13}
            ref={myRef}
          />
        ) : showItem8Purchase === true ? (
          <ItemToPurchase
            clothesUrls={item15Urls}
            garment={item15}
            ref={myRef}
          />
        ) : showItem9Purchase === true ? (
          <ItemToPurchase clothesUrls={item2Urls} garment={item2} ref={myRef} />
        ) : showItem10Purchase === true ? (
          <ItemToPurchase clothesUrls={item4Urls} garment={item4} ref={myRef} />
        ) : showItem11Purchase === true ? (
          <ItemToPurchase clothesUrls={item6Urls} garment={item6} ref={myRef} />
        ) : showItem12Purchase === true ? (
          <ItemToPurchase clothesUrls={item8Urls} garment={item8} ref={myRef} />
        ) : showItem13Purchase === true ? (
          <ItemToPurchase
            clothesUrls={item10Urls}
            garment={item10}
            ref={myRef}
          />
        ) : showItem14Purchase === true ? (
          <ItemToPurchase
            clothesUrls={item12Urls}
            garment={item12}
            ref={myRef}
          />
        ) : showItem15Purchase === true ? (
          <ItemToPurchase
            clothesUrls={item14Urls}
            garment={item14}
            ref={myRef}
          />
        ) : showItem16Purchase === true ? (
          <ItemToPurchase
            clothesUrls={item16Urls}
            garment={item16}
            ref={myRef}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Orders;
