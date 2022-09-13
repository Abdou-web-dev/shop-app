import * as React from "react";
import ItemAlbum from "../albums/ItemAlbum";
import { getAllClothesUrls } from "../../services/dataFetcher";

// function ItemToPurchase({ ref }) {
const ItemToPurchase = React.forwardRef(({ clothesUrls, garment }, ref) => {
  const thumbnailImg = [
    ...new Set(clothesUrls.map && clothesUrls?.map((cloth) => cloth.url1)),
  ];
  console.log(thumbnailImg);

  return (
    <div ref={ref}>
      <section>
         <ItemAlbum clothesUrls={clothesUrls} />
      </section>
      <section>
        {garment.map &&
          garment?.map((element, index) => (
            <>
              <div key={index}>
                <span>{element.name}</span>
                <span>{element.price}</span>
                <span>{element.colorPattern}</span>
              </div>
              <div></div>
            </>
          ))}
        <img src={thumbnailImg} alt="" width="56px" height="86px" />
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
});

export default ItemToPurchase;
