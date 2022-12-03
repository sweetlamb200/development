import React from "react";
import { Box, Typography } from '@mui/material';
import FaveItem from "./FaveItem";

function AnimeItem(props) {
    
    return (
    <div className="Anitem">
        <Box sx={{display: 'flex', justifyContent: 'space-between', boxShadow: 5, alignItems: "center", height: '30rem', padding: 1}}>
            <img src={props.item.image} alt="Logo" />   
            <div>
            <Typography variant="h5" component="h2">{props.item.name}</Typography>
            <br></br>
            <Typography variant="body1" component="h2" align="left"> <b>Description: </b> {props.item.description}</Typography>
            <br></br>
            <Typography variant="body1" component="h2" align="left"> <b>Rating:</b> {props.item.rating}</Typography>
            <br></br>
            <Typography variant="body1" component="h2" align="left"> <b>Genre:</b> {props.item.genre}</Typography>
            <br></br>
            <Typography variant="body1" component="h2" align="left"> <b>Ongoing:</b> {props.item.ongoing}</Typography>
            <br></br>
            <FaveItem item={props.item} favouriteItems={props.favouriteItems} setfavItems={props.setfavItems}/>
            <br></br>
            <br></br>
            </div>
        </Box>
    </div>
        )
}

export default AnimeItem;