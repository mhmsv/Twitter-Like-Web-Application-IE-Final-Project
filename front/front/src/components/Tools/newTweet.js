import React, {useRef, useState, useEffect} from "react";
import ReactDOM from "react-dom";


import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

const ImgIcon = InsertPhotoIcon;

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

const Img = ({file, onRemove, index}) => {
    const [fileUrl, setFileUrl] = useState(null);
    useEffect(() => {
        if (file) {
            setFileUrl(URL.createObjectURL(file));
        }
    }, [file]);

    return fileUrl ? (
        <div style={{position: "relative", maxWidth: "230px", maxHeight: "95px"}}>
            <img
                style={{
                    display: "block",
                    maxWidth: "230px",
                    maxHeight: "95px",
                    width: "auto",
                    height: "auto"
                }}
                alt="pic"
                src={fileUrl}
            />
            {onRemove && (
                <div
                    onClick={() => onRemove(index)}
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "black",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    x
                </div>
            )}
        </div>
    ) : null;
};


const Tweet = ({tweet: {text, images,date}}) => (
    <div

        style={{
            margin: "20px",
            border: "1px solid grey",
            width: "600px",
            padding: "20px"
        }}
    >
        <div>{date}m ago</div>
        <div>{text}</div>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                background: "fbfbfb"
            }}
        >
            {images.map((img, i) => (
                <Img key={i} file={img} index={i}/>
            ))}
        </div>
    </div>
);

export default function TweetSheet() {
    const [text, setText] = useState("");
    const [pics, setPics] = useState([]);
    const textAreaRef = useRef();
    const [tweets, setTweets] = useState([]); // array of object of shape {text: '', images: []}


    const onClickTweet = () => {
        if ((text.length < 256 && text.length > 0)) {
            setTweets(oldState => [...oldState, {text, images: [...pics]}]);
            // window.alert(pics)
        } else {
            {
                window.alert("Please tweet between 1 and 256 charecters")
            }
        }
        setText("");
        setPics([]);

    };
    return (
        <>
            <div
                style={{
                    borderColor: "#0b467e",
                    borderWidth: "5px",
                    backgroundColor: "#0b467e",
                    display: "flex",
                    flexDirection: "column",
                    border: "3px solid",
                    borderRadius: "5px",
                    width: "100%",
                    minHeight: "200px",
                    padding: "20px",
                    justify: "center"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        border: "1px solid",
                        borderRadius: "5px",
                        margin: "0px"
                    }}
                >
          <textarea className={"newtweetEntry"} placeholder="What's happening?"
                    ref={textAreaRef}
                    value={text}
                    style={{
                        backgroundColor: "lightblue",
                        flex: 1, border: "none", minHeight: "150px"
                    }}
                    onChange={e => setText(e.target.value)}
          />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignItems: "center",

                        }}
                    >
                        {pics.map((picFile, index) => (
                            <Img
                                key={index}
                                index={index}
                                file={picFile}
                                onRemove={rmIndx =>
                                    setPics(pics.filter((pic, index) => index !== rmIndx))
                                }
                            />
                        ))}
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "20px"
                    }}
                >
                    <div style={{marginRight: "20px"}}>
                        <FileInput onChange={pics => setPics(pics)}>
                            <ImgIcon className={"imageicon"}/>
                        </FileInput>
                    </div>

                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }}
                    >
                        <button onClick={onClickTweet} style={{
                            color: "#0b467e",
                            fontSize: "20px",
                            backgroundColor: "lightblue",
                            fontFamily: "Roboto"
                        }}>
                            POST
                        </button>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: "#0b467e", display: "flex", flexDirection: "column"}}>
                {tweets.map(tweet => (
                    <Tweet tweet={tweet}/>
                ))}
            </div>

        </>
    );
}


