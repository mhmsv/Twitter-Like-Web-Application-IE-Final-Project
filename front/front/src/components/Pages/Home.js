import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import tweeterIcon from '../../assets/Twitter_Logo_Blue.png';


function Home() {
    document.title = "Welcome";


    return (
        <div>
            <Grid container justify={"space-between"}>


                <button className={"auth_but"} onClick={() => window.location.href = '/signin'}>Sign in</button>
                <button className={"auth_but"} onClick={() => window.location.href = '/signup'}>Sign up</button>

            </Grid>
            <h1 container justify={"space-between"} className={"welcome"}>See what’s happening in the world right
                now!</h1>
        </div>
    )

}

export default Home;