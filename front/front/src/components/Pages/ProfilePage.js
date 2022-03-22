import '../../index.css';
import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Tweet from "./Tweet";
import TweetSheet from "../Tools/newTweet"
import PageLayout from "../../Layout/PageLayout";


// console.log({one, two})

// Tweet({isLiked: true})

const ProfilePage = (props) => {
    const {ProfilePic, prevtweets, username, followers, followings, pinned_tweet_id, id, tweetsNumber, likesNumber,onLike,toggleRetweet} = props;
    document.title = "Profile";
    console.log("aghaye omad    " + props.username + "  ba str :" + props.username.toString());
    const [tweets, setTweets] = useState([]); // array of object of shape {text: '', images: []}

    // {tweets.map(tweet => (
    // <Tweet tweet={tweet} />
    // ))}

    return (
        <div>
            <h1 container justify={"space-between"} className={"HEADER"}>{props.username.toString()}'s Profile</h1>

            <Card className={"profileCard"} elevation={3}
                  style={{margin: "1rem 1.3rem", padding: "1rem", borderRadius: 4}}>

                <Grid className={"profileGrid"} style={{backgroundColor: "#0b467e", fontColor: "lightBlue"}} container
                      justify={"space-between"}>

                    <div>
                        <h4>{tweetsNumber} tweets </h4>
                        <h4>Followers:{followers} Following:{followings}       </h4>
                        <h4>Likes :{likesNumber}      </h4>

                    </div>
                    <Avatar src={ProfilePic} sizes={"40px"}/>


                </Grid>
                <br/>
                <button onClick={() => TweetSheet} className={"new_tweet"} container justify={"center"}>+</button>
                <TweetSheet/>
                <h1 className={"HEADER"}>Tweets:</h1>
                {/*itterate over number of tweets*/}
                <Tweet {...props}  onLike={props.onLike}
                        onRetweet={props.toggleRetweet}
                       text={"This is a simple test, unfortunetly we dont have connection between frontend and backend"}
                       tweetDate={"4 min ago"} avatarUrl={"src/assets/mhavatar.png"}/>
                <Tweet {...props}  onLike={props.onLike}
                       onRetweet={props.toggleRetweet}
                       text={"our twitter sucks"}
                       tweetDate={"5 min ago"} avatarUrl={"src/assets/mhavatar.png"}/>
                <Tweet {...props}  onLike={props.onLike}
                       onRetweet={props.toggleRetweet}
                       text={"لعنت به ری اکت"}
                       tweetDate={"6 min ago"} avatarUrl={"src/assets/mhavatar.png"}/>
                <Tweet {...props}  onLike={props.onLike}
                       onRetweet={props.toggleRetweet}
                       text={"آقای موحد متش خوب نمره بده"} isRetweeted={true} isLiked={true}
                       tweetDate={"8 min ago"} avatarUrl={"src/assets/mhavatar.png"}/>
                <Tweet {...props}  onLike={props.onLike}
                       onRetweet={props.toggleRetweet}
                       text={"واقعا پروژه طولانی بهمون دادن "}
                       tweetDate={"10 min ago"} avatarUrl={"src/assets/mhavatar.png"}/>
            </Card>
        </div>

    );
};


export default ProfilePage;

//rsi