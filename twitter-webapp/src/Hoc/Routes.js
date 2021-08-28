import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import Login from '../Components/Login/Login'
import Axios from 'axios'


class Routes extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentDidMount = () => {
        
    }

    

    logout = () =>{
        const fd = new FormData()
        fd.append('email_id', this.state.emailId)
        fd.append('auth_token', this.state.auth_key)
        Axios({
            url: 'https://www.clippr.ai/api/v2/user/logout',
            method: 'POST',
            data: fd
        })
        .then((resp) => {
            if (resp.data?.status == 200) {
                
                document.cookie = 'emailId' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = 'userId' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = 'isValidated' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = 'auth_token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = 'ssoToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = 'enterpriseId' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = 'role' +'=; Path=/dashboard; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = 'role' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                window.sessionStorage.clear()
                window.location.replace("http://35.224.235.220/dashboard/login")
            }
        })
        
    }

    

    render() {
        
        return (
            <div>
                <div>
                    <Route path = "/login" exact component={Login} />
                </div>
            </div>
        )
    }
}

export default withRouter(Routes)
