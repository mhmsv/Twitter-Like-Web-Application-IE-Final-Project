import './App.css';
import './index.css';

import Tweet from "./components/Pages/Tweet";
import Navbar from "./components/Tools/navbar"
import React, {useEffect, useState} from "react";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProfilePage from "./components/Pages/ProfilePage";

import ButtonAppBar from "./components/Tools/Header";

import SignUpform from "./components/Forms/signUpform";
import SignInForm from "./components/Forms/LogeinForm";
import Home from "./components/Pages/Home";
import searchBar from "./components/Tools/searchBar";
import PageLayout from "./Layout/PageLayout";
import Notifi from "./components/Pages/Notifications";
import saved from "./components/Pages/saved";
import EditProfile from "./components/Pages/EditProfile";
// import Switch from 'react-router-dom'
const arr = [1, 2, 3];
const [one, two] = arr;
let currentUserid = 0;
// console.log({one, two})

// Tweet({isLiked: true})

function App() {
    const users = [];

    const adminUser = {

        username: "Admin",
        email: "admin@admin.com",
        password: "admin",
        userid: 1
    }
    users.push(adminUser)

    const Login = details => {
        for (let i = 0; i < users.length; i++) {
            console.log("SIGN IN user ba username robero ro darim " + users[0].username)
        }
        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("loged in")
            setUser({username: details.username, email: details.email});
            console.log(details)

            // window.location.href = '/profile';
        } else {
            console.log("details do not match")
            setError("Wrong entry!")
        }
    }
    // const editing = details =>{
    //     details.username
    // }

    const signup = details => {
        console.log("signup jadid ba:" + details.email + " user: " + details.username);
        if (details.email == adminUser.email) {
            console.log("Account with " + details.email + "already exists")
            setError("Account with " + details.email + "already exists")
            console.log("got this details:+ " + details)
            users.push(details);
            for (let i = 0; i < users.length; i++) {
                console.log("SIGN UP user ba username robero ro darim " + users[0].username)
            }
        } else if (details.username == adminUser.username) {
            console.log("Username already exists")
            setError("Username already exists")
        } else {
            console.log("successfully signed up")
            //add user
            users.push(details);
            for (let i = 0; i < users.length; i++) {
                console.log("SIGN UP SHOD user ba username robero ro darim " + users[0].username)
            }
            currentUserid += 1;
            setUser({username: details.username, email: details.email, userid: currentUserid});
            console.log("its user:" + " " + details.username + "and password: " + details.password);
            // window.location.href = '/profile';

        }

    }

    const Logout = () => {
        console.log("user + " + user.username + "logedout")
        setUser({username: "", email: "", userid: ""})
        window.location.href = '/init';
    }

    const editprofile = () => {
        console.log("user + " + user.username + "logedout")
        window.location.href = '/profile';
    }


    const [user, setUser] = useState({username: "", email: "", userid: ""});
    const [error, setError] = useState("")

    //hiook
    const [isLikedState, setIsLiked] = useState(false);

    const toggleIsLiked = () => {
        // likesNumber+=1
        setIsLiked(!isLikedState);
    }

    const [isRetweeted, setIsRetweeted] = useState(false);
    const toggleRetweet = () => {
        setIsRetweeted(!isRetweeted);
    }

    // useEffect(() => {
    //     //effect that we want
    //     const id = setInterval(() => {
    //         toggleIsLiked()
    //     }, 1000);
    //     return () => {
    //         clearInterval(id);
    //     }
    // }, [toggleIsLiked])

    // useEffect(() => {
    //     document.title = isLikedState.toString()
    // }, [isLikedState])
    document.title = "Twitter";
    let loginState;

    return (
        <div className={"root"}>
            <Router>
                <div>
                    <ButtonAppBar></ButtonAppBar>
                    <PageLayout>
                        {console.log("user: " + user.email)}
                        {(user.email != "") ? <button className={"auth_but"} onClick={Logout}>Logout</button> : ""}
                        {/*{(user.email!="" ) ? <button className={"auth_but"} onClick={ <Route path="/profile" exact component={Home}/>*/}
                        {/*}>Edit Profile</button> : ""}*/}
                        {(user.email != "") ? loginState = true : loginState = false}
                        <Switch>

                            {/*<Route path="/" exact component={Home}/>*/}
                            <Route
                                path='/feed'
                                render={(props) => (

                                    <Tweet {...props} isLiked={isLikedState} onLike={toggleIsLiked}
                                           isRetweeted={isRetweeted} onRetweet={toggleRetweet}
                                           text={"This is a simple test, unfortunetly we dont have connection between frontend and backend"}
                                           tweetDate={"1 min ago"} avatarUrl={"src/assets/mhavatar.png"}/>
                                )}

                            />

                            <Route
                                path='/signup'
                                render={(props) => (
                                    (user.email == "") && <SignUpform {...props} signup={signup} error={error}/>
                                )}
                            />


                            <Route
                                path='/signin'
                                render={(props) => (
                                    (user.email == "") && <SignInForm {...props} Login={Login} error={error}/>
                                )}

                            />

                            <Route path="/init" exact component={Home}/>
                            <Route path="/" exact component={Home}/>


                            {/*isLiked={isLikedState} onLike={toggleIsLiked} isRetweeted={isRetweeted} onRetweet={toggleRetweet} text={"This is a simple test"} tweetDate={"1/1/1990"} />*/}

                            Bookmarks
                            <Route path="/bookmarks" exact component={saved}/>

                            <Route
                                path='/profile'
                                render={(props) => (
                                    <ProfilePage {...props} username={user.username} tweetsNumber={"1"}
                                                 likesNumber={"0"} onLike={toggleIsLiked} toggleRetweet={toggleRetweet}/>
                                )}
                                // ProfilePic={}prevtweets={}username={user.username}followers={}followings={}pinned_tweet_id={}id={}tweetsNumber={"789"}likesNumber={"22"}
                            />

                            <Route path="/search" exact component={searchBar}/>

                            <Route
                                path='/notifications'
                                render={(props) => (
                                    <Notifi {...props} avatarUrl={"/srcassets/mhavatar.png"} username={user.username}
                                            activity={"followed"} notifiDate={"10m ago"}/>

                                )}
                                // ProfilePic={}prevtweets={}username={user.username}followers={}followings={}pinned_tweet_id={}id={}tweetsNumber={"789"}likesNumber={"22"}
                            />

                            <Route
                                path='/edit'
                                render={(props) => (
                                    <EditProfile {...props} username={user.username} userid={user.userid}/>
                                )}
                            />

                        </Switch>
                        <Navbar/>
                    </PageLayout>

                </div>

            </Router>
        </div>
    );
}


export default App;
