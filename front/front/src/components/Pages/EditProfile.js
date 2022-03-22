import React, {useRef, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';


// console.log({one, two})
import FaceIcon from '@material-ui/icons/PhotoCamera';

const ImgIcon = FaceIcon;

const EditProfile = (props) => {


    const FileInput = ({onChange, children}) => {
        const fileRef = useRef();
        const onPickFile = event => {
            onChange([...event.target.files]);
        };
        return (
            <div
                style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "3px"
                }}
                onClick={() => fileRef.current.click()}
            >
                {children}
                <input
                    multiple
                    ref={fileRef}
                    onChange={onPickFile}
                    type="file"
                    style={{visibility: "hidden"}}
                />
            </div>
        );
    };

    const submitHandler = e => {
        e.preventDefault()
    }


    const {ProfilePic, username, userid} = props
    document.title = "Edit Profile";
    console.log("want to edit profile   " + props.username + "  ba str :" + props.username.toString());


    return (
        <div>

            <h1 container justify={"space-between"} className={"HEADER"}>Editing Profile</h1>


            <Card className={"profileCard"} elevation={3}
                  style={{margin: "1rem 1.3rem", padding: "1rem", borderRadius: 4}}>
                <div className={"HEADER"}>Edit your username</div>
                {/*<span className={"HEADER"} >current : </span>*/}
                <div>
                    <input placeholder={props.username} onChange={event => console.log(event.target.value)}/>
                </div>

            </Card>

            <Card className={"profileCard"} elevation={3}
                  style={{margin: "1rem 1.3rem", padding: "1rem", borderRadius: 4}}>
                <Avatar src={ProfilePic} sizes={"100px"}/>

                <div className={"HEADER"}>Change or Upload Your Avatar</div>
                <div style={{marginRight: "20px"}}>
                    <FileInput onChange={console
                        .log("changed")}>
                        <ImgIcon className={"AKSJADID"}/>
                    </FileInput>
                </div>
            </Card>

            {console.log("jadide yaro shod" + props.username)}
        </div>
    );
};


export default EditProfile;

//rsi