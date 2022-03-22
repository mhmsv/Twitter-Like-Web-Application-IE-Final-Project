import React from "react";
import 'antd/dist/antd.css';
import {Input, Space} from 'antd';
import {Grid} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";

const {Search} = Input;

// console.log({one, two})

// Tweet({isLiked: true})
const onSearch = value => {
    console.log("searched" + value)
    window.alert("search mikoni:" + value)

};

function searchBar() {

    return (
        <div>
            <h1 container justify={"space-between"} className={"HEADER"}> Search</h1>

            <Grid container="true" justify={"center"}>

                <Space direction="vertical">

                    <Search placeholder="search for usernames, hashtags or tweets" onSearch={onSearch} enterButton/>
                </Space>


            </Grid>
        </div>
    );
}

export default searchBar;

//rsi