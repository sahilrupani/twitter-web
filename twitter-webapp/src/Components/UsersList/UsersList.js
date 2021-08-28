import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "../../Css/UsersList/UsersList.css"
import UsersCard from './UsersCard'



function UsersList() {

    const cookie = key=>((new RegExp((key || '=')+'=(.*?); ','gm')).exec(document.cookie+'; ') ||['',null])[1]

    const [followedUsers,setFollowedUsers] = useState([])
    const [notFollowedUsers,setNotFollowedUsers] = useState([])

    useEffect(() => {
        // let auth_token = cookie('auth_token')
        // if(auth_token){
        //   getUsers()
        // }else{
        //   logout()
        // }
        
      }, []);

      const getUsers = () =>{
        axios({
            method: "GET",
            url : "http://localhost:5000/api/v1/post/get",
            params : {
                user_id: cookie("userId")
            }
            
          }).then((resp) => {
            if(resp?.data?.status == 200){
                setFollowedUsers(resp?.data?.followed_users)
                setNotFollowedUsers(resp?.data?.unfollowed_users)
            }else{
              
            }
          })
      }

      const logout = () => {
        document.cookie = 'emailId' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'userId' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'auth_token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.replace("http://localhost:3000/login")
      }
    return (
        <div className="users">
            <div className="users__header">
                <h2>Users</h2>

                
            </div>
            <div className="users__body">
                <div className="row">
                    {followedUsers.map((users) => (
                        <UsersCard 
                            key={users.id}
                            name={users.name}
                            follow={users.is_follow}
                        />
                    ))}

                    {notFollowedUsers.map((users) => (
                        <UsersCard 
                            key={users.id}
                            name={users.name}
                            follow={users.is_follow}
                        />
                    ))}
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default UsersList
