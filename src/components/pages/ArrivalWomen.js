import { Tooltip } from "@mui/material";
import * as React from 'react'
import { womensArrivals } from "../../assets/data/data"
import "./styles.scss"

const ArrivalWomen = () => {
    //   const state = useContext(ThemeContext)

    //filter code here

    return (
        <div className="arrival-women-container">
            {/* add show more/less btn here , and add more clothes..., https://chayanit-chaisri.medium.com/react-create-a-show-more-less-button-aa0e9cd0f927 */}

            <div className="arrival-inner">

                {
                    womensArrivals.map((item, index) => {
                        return (
                            <div key={index} className="women-item">

                                <img className="image" src={item.url} alt="" />

                                <div className={index % 2 !== 0 ? "odd-infos" : "infos"}>
                                    <span className="name">{item.name}</span>

                                    <div className="div1">
                                        <span className="fit-word">Fit : </span>  <span className="fit">  &nbsp;{item.fit}</span>
                                    </div>

                                    <div className="div2">
                                        <span className="price-word">Price : </span>   <span className="price">  &nbsp;{item.price}</span>
                                    </div>

                                    <div className="div3">
                                        <span className="color-word">Color : </span>  <span className="color-pattern">  &nbsp;{item.colorPattern}</span>
                                    </div>

                                    <div className="div4">
                                        <span className="available-word">Available : </span>
                                        <span className={item.inStock === "yes" ? "instock" : "position-no"}>  &nbsp;{item.inStock}
                                            {(item.inStock === "no") && (<span className="asterik">
                                                <Tooltip title="This item will be available shortly" placement="top" arrow={true}>
                                                    <span>&#42;</span>{/* asterik html code */}
                                                </Tooltip>
                                            </span>)}
                                        </span>
                                    </div>

                                    <div className="div5">
                                        <span className="composition-word">Composition : </span>     <span className="composition"> &nbsp;{item.composition}</span>
                                    </div>

                                    <span className="release-year">{item.releaseYear}</span>
                                </div>
                                <hr className="divider" />
                            </div>
                        )
                    })
                }
                {/* index % 2 !== 0 target odd numbers 5 , 7 .... */}
            </div>
        </div>
    )
}

export default ArrivalWomen;
