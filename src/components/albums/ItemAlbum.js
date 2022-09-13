import * as React from "react";

function ItemAlbum({ clothesUrls, item }) {
  return (
    <div className="images-item-album">
      {clothesUrls.map &&
        clothesUrls?.map((itemSelected, index) => (
          <div key={index}>
            <img src={itemSelected.url1} alt=""></img>
            <img src={itemSelected.url2} alt="" />
            <img src={itemSelected.url3} alt="" />
            <img src={itemSelected.url4} alt="" />
            <img src={itemSelected.url5} alt="" />
            <img src={itemSelected.url6} alt="" />
          </div>
        ))}
    </div>
  );
}

export default ItemAlbum;
