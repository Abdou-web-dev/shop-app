import { Grid } from "@mui/material";
import * as React from 'react';
import { womensArrivals } from "../../assets/data/data"

const ArrivalMen = () => {
    //   const state = useContext(ThemeContext)

    return (
        <Grid container spacing={2}>
            {/* <div>

                {
                    womensArrivals.map((item, index) => {
                        return (
                            <div key={index}>
                                <span>{item.name}</span>
                            </div>
                        )
                    })
                }

            </div> */}

            {/* <Grid item xs={6}>
                <div>
                </div>
            </Grid> */}
        </Grid>
    )
}

export default ArrivalMen;
