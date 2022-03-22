import React from 'react';
import {Grid} from "@material-ui/core";

const PageLayout = (props) => {

    return (
        <Grid container= "true" justify={"center"} >
            <Grid item xs={12} md={8}>
                {props.children}
            </Grid>
        </Grid>
    );
};

export default PageLayout;

