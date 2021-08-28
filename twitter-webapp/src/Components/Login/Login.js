import React,{useState, useEffect} from 'react'
import '../../Css/Login/Login.css'
import {Button} from '@material-ui/core'

function Login() {

    const [login, setLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userSignUp = () => {
        
    }

    const userSignIn = () => {
        
    }


    return (
        <div className="login">
            {login ? 
                <div className="login__container">
                    <h1>Sign In Twitter</h1>
                    <form>
                        <div className="login__formData">
                            <label>Email Id</label>
                            <input placeholder="Enter Email ID"/>
                        </div>
                        <div className="login__formData">
                            <label>Password</label>
                            <input placeholder="Enter Password"/>
                        </div>
                        <Button onClick={userSignIn}>Sign In</Button>
                    </form>


                    <h6>New User <a onClick={() => setLogin(!login)}>Sign Up?</a></h6>
                
                    
                </div>
                :
                <div className="login__container">
                    <h1>Sign Up Twitter</h1>
                    <form>
                        
                        <div className="login__formData">
                            <label>Email Id</label>
                            <input placeholder="Enter Email ID"/>
                        </div>
                        <div className="login__formData">
                            <label>Password</label>
                            <input placeholder="Enter Password"/>
                        </div>
                        <Button onClick={userSignUp}>Sign Up</Button>
                    </form>


                    <h6>Existing User <a onClick={() => setLogin(!login)}>Login?</a></h6>
                
                    
                </div>
            }
            
        </div>
    )
}

export default Login
