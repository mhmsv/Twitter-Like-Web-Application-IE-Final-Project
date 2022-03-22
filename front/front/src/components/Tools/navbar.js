import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import {Bookmark, Edit, Home, Notifications, Person, Save, Search} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {css} from "@material-ui/system";

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

var style = {
    backgroundColor: "#1DA1F2",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "45px",
    width: "100%",
}
var phantom = {
    display: 'block',
    padding: '0px',
    height: '60px',
    width: '100%',
}


export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <div style={phantom}/>

            <BottomNavigation

                style={style}>
                <Link to={"/feed"}>
                    <BottomNavigationAction className={"but_nav"} label="Home" icon={<Home/>}/>
                </Link>

                <Link to={"/search"}>
                    <BottomNavigationAction className={"but_nav"} label="Favorites" icon={<Search/>}/>
                </Link>

                <Link to={"/notifications"}>
                    <BottomNavigationAction className={"but_nav"} label="Nearby" icon={<Notifications/>}/>
                </Link>

                <Link to={"/profile"}>
                    <BottomNavigationAction className={"but_nav"} label="Nearby" icon={<Person/>}/>
                </Link>
                <Link to={"/bookmarks"}>
                    <BottomNavigationAction className={"but_nav"} label="Nearby" icon={<Bookmark/>}/>
                </Link>

                <Link to={"/edit"}>
                    <BottomNavigationAction className={"but_nav"} label="Nearby" icon={<Edit/>}/>
                </Link>

            </BottomNavigation>
        </div>
    );
}
