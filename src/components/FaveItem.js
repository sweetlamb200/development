import React from "react";
import { Button } from '@mui/material';
import FavoriteBorderOutlinedIcon  from '@mui/icons-material/Favorite';

function FaveItem(props) {
    const handleChange = () => {
        if(props.favouriteItems.includes(props.item)){
            props.setfavItems(props.favouriteItems.filter(a => a.name !== props.item.name))     
        } else {
            props.setfavItems([...props.favouriteItems, props.item])
        }
    }
        if(props.favouriteItems.includes(props.item)) {
            return <Button size="small" variant="contained" onClick={handleChange}> 
            <FavoriteBorderOutlinedIcon/>
            </Button>
        } else {
            return <Button size="small" variant="outlined" onClick={handleChange}> 
            <FavoriteBorderOutlinedIcon/>
            </Button>
        }
}

export default FaveItem;