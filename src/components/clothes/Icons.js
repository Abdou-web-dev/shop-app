
import { IconButton, Tooltip, Snackbar } from '@mui/material';
import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CloseIcon from "@material-ui/icons/Close";
import axios from 'axios';
import "./styles.scss"

//parent component
const Icons = ({ index, clothId }) => {

    const [Iconcolor, setIconColor] = React.useState("black");
    const [message, setMessage] = React.useState("")

    const [selectedClothes, setSelectedClothes] = React.useState([]);

    const handleClick = () => {
        let newSelClothes = [...selectedClothes];

        if (index === 1 || index === 0) {
            if (Iconcolor === "black") {
                setIconColor("red"); setOpen(true); setMessage("This item has been added to your Wishlist !");
                newSelClothes.splice(newSelClothes.indexOf(clothId), 1);
                axios.post("http://localhost:8005/posts", selectedClothes).then((response) => {
                    console.log(response);
                });
            }
            else {
                setIconColor("black"); setOpen(true); setMessage("This item has been deleted from your Wishlist !");
                newSelClothes.push(clothId);
                // axios.delete("http://localhost:8005/posts", selectedClothes).then((response) => {
                //     console.log(response);
                // });
                axios.delete("http://localhost:8005/posts")

            }
            setSelectedClothes(newSelClothes);
            console.log(selectedClothes);
        }
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => { setOpen(false) };

    let anchOrig = { vertical: 'bottom', horizontal: 'center' }

    //code to save the id of the cloth added to the wishlist

    return (
        <div className=''>
            <IconButton className="heart" style={{ color: Iconcolor }} disableRipple onClick={handleClick}>
                <FavoriteBorderIcon fontSize='large' />
            </IconButton >
            <IconButton id='bookmark-icon' >
                <BookmarkBorderIcon fontSize='large' />
            </IconButton>

            <Snackbar
                anchorOrigin={anchOrig}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message={message}
                action={
                    <React.Fragment>
                        <IconButton color="inherit" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </div>
    )
}
export default Icons;

