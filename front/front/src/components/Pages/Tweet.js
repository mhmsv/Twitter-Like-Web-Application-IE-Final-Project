import React from 'react';
import Card from "@material-ui/core/Card";
import {Avatar, Box, Button, Divider, Grid, IconButton, Typography} from "@material-ui/core";
import {red} from '@material-ui/core/colors'
import {ChatBubble, Comment, Favorite, FavoriteBorder, MoreHoriz} from "@material-ui/icons";
import RetIcon from '../../assets/retIcon.png';
import LongMenu from "../Tools/longMenu";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
    , "Pin to your profile",
    'Bookmark',
    'Delete',
];

const ITEM_HEIGHT = 48;


// name
// avatarUrl
// text
// tweetDate
// like
// onLike
const Tweet = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const {avatarUrl, name, text, tweetDate, isLiked, isRetweeted, id, likesNumber, pics, tweet, LongMenu} = props;
    console.log(avatarUrl)
    // const isLiked = props.isLiked;
    // const isLiked = props.isLiked;
    return (
        <Card elevation={3} style={{margin: "1rem 1.3rem", padding: "1rem", borderRadius: 4}}>
            <Grid container justify={"space-between"}>
                <Avatar src={props.avatarUrl} alt={"unknown"} sizes={"40px"}/>
                {
                    tweetDate?.toString()
                }
            </Grid>
            <Divider/>
            <Box>
                <Typography variant={"h6"}>
                    {name}
                </Typography>
            </Box>
            <Box>
                <Typography className={"tweettext"} variant={"body2"}>
                    {text}
                </Typography>
            </Box>

            <Grid container justify={"flex-end"}>
                <IconButton className={"tweetIcon"}>
                    <ChatBubble/>
                </IconButton>
                <IconButton onClick={props.onLike} className={"tweetIcon"}>
                    {isLiked ? <Favorite style={{color: red[400]}}/> : <FavoriteBorder/>}
                    {likesNumber}
                    {/*dorost she*/}
                    1
                </IconButton>
                <IconButton onClick={props.onRetweet} className={"tweetIcon"}>
                    {isRetweeted ? <img src={RetIcon} alt={"ret icon"} width={25} height={25}
                                        style={{filter: "invert(68%) sepia(15%) saturate(1460%) hue-rotate(94deg) brightness(84%) contrast(95%)"}}/> :
                        <img src={RetIcon} alt={"ret icon"} width={25} height={25} style={{filter: "opacity(65%)"}}/>}
                </IconButton>
                <IconButton
                    className={"tweetIcon"}
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon/>
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>


            </Grid>
        </Card>
    );
};


export default Tweet;