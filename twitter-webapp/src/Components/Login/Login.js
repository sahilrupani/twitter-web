import React,{useState, useEffect} from 'react'
import '../../Css/Login/Login.css'
import {Button} from '@material-ui/core'
import axios from 'axios'

function Login() {

    const [login, setLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailExists,setEmailExists] = useState(false)
    const [userId, setUserId] = useState('')
    const [validEmail,setValidEmail] = useState(false)
    const [userName, setUserName] = useState('')

    const userSignUp = () => {
        const fd = new FormData();
        fd.append('user_name', userName)
        fd.append('email_id', email)
        fd.append('password', password)
        axios.post(`http://localhost:5000/api/v1/user/signup`,fd)
        .then(resp => {
            if (resp?.data?.status !== 200) {
                setEmailExists(true)
            }else if (resp?.data?.status === 200) {
                setUserId(resp.data.user_id)
                
                document.cookie = `emailId=${email}; path=/`;
                document.cookie = `userId=${userId}; path=/`;
                document.cookie = `auth_token=${resp.data?.auth_token}; path=/`;
                
                window.location.replace("http://localhost:3000/home")
            }
        })
    }

    const userSignIn = () => {
        const fd = new FormData();
        fd.append('email_id', email)
        fd.append('password', password)
        axios.post(`http://localhost:5000/api/v1/user/login`,fd)
        .then(resp => {
            if (resp?.data?.status !== 200) {
                setValidEmail(true)
            }else if (resp?.data?.status === 200) {
                setUserId(resp.data.user_id)
                
                document.cookie = `emailId=${email}; path=/`;
                document.cookie = `userId=${userId}; path=/`;
                document.cookie = `auth_token=${resp.data?.auth_token}; path=/`;
                
                window.location.replace("http://localhost:3000/home")
            }
        })
    }


    return (
        <div className="login">
            {login ? 
                <div className="login__container">
                    <h1>Sign In Twitter</h1>
                    <form>
                        <div className="login__formData">
                            <label>Email Id</label>
                            <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email ID"/>
                            {validEmail ? 
                            <h6>Invalid Credentials</h6>
                            :
                            null
                            }
                        </div>
                        <div className="login__formData">
                            <label>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type="password"/>
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
                            <label>Name</label>
                            <input onChange={(e) => setUserName(e.target.value)} placeholder="Enter Name"/>
                            
                        </div>
                        
                        <div className="login__formData">
                            <label>Email Id</label>
                            <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email ID"/>
                            {emailExists ? 
                            <h6>Email Id Already Exists. <a onClick={() => setLogin(!login)}>Login here</a></h6>
                            :
                            null
                            }
                        </div>
                        <div className="login__formData">
                            <label>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" type="password"/>
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
