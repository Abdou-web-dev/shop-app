import { Box } from '@mui/material';
import * as React from 'react'
import { Link } from 'react-router-dom';
import "./styles.scss"

const NewArrival = ({ category }) => {
    //   const state = useContext(ThemeContext)

    return (
        <div className={category === "men's" ? 'new-arrival-container' : "container-women"}>
            <Link to={category === "men's" ? "arrival-men" : "arrival-women"} style={{ textDecoration: "none" }}>
                <Box className="box"
                    sx={{
                        width: 420,
                        height: 420,
                        backgroundColor: 'lightgray',
                        '&:hover': {
                            backgroundColor: 'gray',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <span> {category}</span>
                </Box>
            </Link>
        </div>
    )
}

export default NewArrival;
