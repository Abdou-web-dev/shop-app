import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { Tooltip } from '@mui/material';
import "./styles.scss"
import "./styles.css"


export default function SearchComponent({ searchItems, label }) {

    return (
        <Tooltip id='tooltip1' leaveDelay={150} title="Search by fabric type, fit or name..." arrow={true}>
            <div className='search-container'>
                <TextField onChange={(e) => searchItems(e.target.value)} label={label}
                    placeholder='Search products...' className='field'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ marginLeft: "10px" }}>
                                <SearchIcon />
                            </InputAdornment>
                        ), disableUnderline: true
                    }}
                    variant="standard"
                    sx={{ border: "1px solid lightgray", height: "50px", width: "350px", '&:hover': { filter: "opacity(.9)", background: "rgba(245, 245, 220, 0.2)", border: ".2px solid black" } }}
                />
            </div>
        </Tooltip>

    );
}
