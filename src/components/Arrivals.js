import { Grid, Stack } from "@mui/material";
import * as React from 'react'
import NewArrival from "./cards/NewArrival"
import "./styles.scss"

const Arrivals = () => {
    //   const state = useContext(ThemeContext)

    return (
        <Grid container spacing={2} className="arrivals-container">
            <Stack direction='row' spacing={20} sx={{ margin: "0 auto" }}>
                <Grid item xs={6}>
                    <div>
                        <NewArrival category="men's" />
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div>
                        <NewArrival category="women's" />
                    </div>
                </Grid>
            </Stack>
        </Grid>
    )
}

export default Arrivals;
