import React, {useState} from "react"
import PageLayout from "../../Layout/PageLayout";
import {Grid} from "@material-ui/core";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({username: "", email: "", password: ""});
    document.title = "Sign In";

    const submitHandler = e => {
        e.preventDefault()
        Login(details);
    }
    return (
        <PageLayout>

            <form onSubmit={submitHandler} className={"signinsignup"}>
                <div className="form-inner">
                    <h2>Login</h2>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="username">user name</label>*/}
                    {/*    <input type="text" name="username" id="username" onChange={e => setDetails({...details, username:e.target.value})} value={details.username}/>*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"
                               onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password" id="password"
                               onChange={e => setDetails({...details, password: e.target.value})}
                               value={details.password}/>
                    </div>
                    <input className={"auth_but"} type="submit" value="Sign In"/>
                    <button className={"auth_but"} onClick={() => window.location.href = '/signup'}>Go To Sign Up Page
                    </button>

                </div>
            </form>
        </PageLayout>
    )
}

export default LoginForm;