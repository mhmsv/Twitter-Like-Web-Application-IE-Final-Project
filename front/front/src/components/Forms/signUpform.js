import React, {useState} from "react"
import PageLayout from "../../Layout/PageLayout";

function SignUpform({signup, error}) {
    const [details, setDetails] = useState({username: "", email: "", password: ""});
    document.title = "Sign up";

    const submitHandler = e => {
        e.preventDefault()
        signup(details);
    }
    return (
        <PageLayout>
            <form onSubmit={submitHandler} className={"signinsignup"}>
                <div className="form-inner">
                    <h2>Sign up</h2>
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="username">user name</label>
                        <input type="text" name="username" id="username"
                               onChange={e => setDetails({...details, username: e.target.value})}
                               value={details.username}/>
                    </div>

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
                    <input className={"auth_but"} type="submit" value="Sign Up"/>
                    <button className={"auth_but"} onClick={() => window.location.href = '/signin'}>Go To Sign In Page
                    </button>


                </div>
            </form>
        </PageLayout>
    )
}

export default SignUpform;