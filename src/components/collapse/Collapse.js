import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';

const icon = (
    <Paper sx={{ m: 1, background: "gray" }} elevation={4}>
        <Box component="svg" sx={{ width: 100, height: 100 }}>
            <Box
                component="polygon"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
                points="0,100 50,00, 100,100"
            />
        </Box>
    </Paper>
    // <div>
    //     <img src="https://cdn-icons-png.flaticon.com/512/672/672716.png" alt="" width={30} />
    // </div>
);

export default function SimpleCollapse() {
    const [show, setShow] = React.useState(false);

    const handleClick = () => {
        if (show === true) setShow(false);
        else if (show === false) setShow(true);
        // === setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ height: 300 }}>
            {/* <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
            /> */}
            <Button onClick={handleClick}>
                <span>{show === true ? "Hide" : "Show"}</span>
            </Button>
            <Box
                sx={{
                    border: "1px solid lightgray",
                    '& > :not(style)': {
                        display: 'inline-flex',
                        justifyContent: 'space-around',
                        height: 120,
                        width: 250,
                    },
                }}
            >
                <div>
                    <Collapse in={show}>{icon}</Collapse>
                    <Collapse in={show} collapsedSize={15}>
                        {icon}
                    </Collapse>
                </div>
                <div>
                    <Box sx={{ width: '50%' }}>
                        <Collapse orientation="horizontal" in={show}>
                            {icon}
                        </Collapse>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                        <Collapse orientation="horizontal" in={show} collapsedSize={40}>
                            {icon}
                        </Collapse>
                    </Box>
                </div>
            </Box>
        </Box>
    );
}
