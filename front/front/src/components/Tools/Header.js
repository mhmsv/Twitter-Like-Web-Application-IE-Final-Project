import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../../index.css';
import tweeterIcon from '../../assets/Twitter_Logo_Blue.svg';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: 10,
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function ButtonAppBar(login) {
    const classes = useStyles();

    let props = login.bool;
    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        <img src={tweeterIcon} alt={"Tweeter icon"} width={50} height={50}/>
                    </Typography>

                </Toolbar>

            </AppBar>
        </div>
    );
}
