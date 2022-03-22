import React from 'react';
import Card from "@material-ui/core/Card";
import {Avatar, Box, Button, Divider, Grid, IconButton, Typography} from "@material-ui/core";
import {red} from '@material-ui/core/colors'
import {ChatBubble, Comment, Favorite, FavoriteBorder, MoreHoriz, People} from "@material-ui/icons";
import RetIcon from '../../assets/retIcon.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {fontSize} from "@material-ui/system";
import PageLayout from "../../Layout/PageLayout";


const Notifi = (props) => {
    const {avatarUrl, username, activity, notifiDate, isLiked, isRetweeted, isFollowed} = props;
    // const isLiked = props.isLiked;
    // const isLiked = props.isLiked;
    return (
        <div>
            <h1 container justify={"space-between"} className={"HEADER"}> Notifications</h1>

            <Card elevation={3} style={{margin: "1rem 1.3rem", padding: "1rem", borderRadius: 4}}>

                <Grid container justify={"space-between"}>
                    <Avatar src={avatarUrl} alt={"mamad"} sizes={"40px"}/>
                    {
                        notifiDate?.toString()
                    }
                </Grid>
                <Divider/>
                <br/>
                <Box>
                    <Typography variant={"h6"}>
                        {username}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant={"body2"} style={{fontsize: "24px"}}>

                        {!isLiked ? <FavoriteIcon style={{color: red[400]}}/> : ""}
                        {!isRetweeted ? <img src={RetIcon} alt={"ret icon"} width={25} height={25}
                                             style={{filter: "invert(68%) sepia(15%) saturate(1460%) hue-rotate(94deg) brightness(84%) contrast(95%)"}}/> : ""}
                        {!isFollowed ? <People/> : ""}
                        <br/>
                        {username + " has " + activity + " you "}
                    </Typography>

                </Box>

                <Grid container justify={"flex-end"}>
                </Grid>

            </Card>
        </div>
    );
};


export default Notifi;