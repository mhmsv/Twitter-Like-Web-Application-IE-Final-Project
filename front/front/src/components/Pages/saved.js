import React, {Component} from "react";
import {Avatar, Box, Divider, Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {red} from "@material-ui/core/colors";
import RetIcon from "../../assets/retIcon.png";
import {People} from "@material-ui/icons";

function saved(props) {
    document.title = "Bookmarks";
    const {avatarUrl, username, tweetID, tweetText} = props;


    return (
        <div>
            <h1 container justify={"space-between"} className={"HEADER"}> Bookmarks</h1>

            <Card elevation={3} style={{margin: "1rem 1.3rem", padding: "1rem", borderRadius: 4}}>


                <Grid container justify={"flex-end"}>
                </Grid>

            </Card>
        </div>
    )

}

export default saved;