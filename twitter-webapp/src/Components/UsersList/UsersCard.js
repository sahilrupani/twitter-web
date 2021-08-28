import React from 'react'
import "../../Css/UsersList/UsersList.css"

function UsersCard(name,follow) {
    return (
        <div>
            <div className="col-md-4">
                <div className="users_card">
                    <h4>{name}</h4>
                    <button>
                        {follow ?
                            <span>UnFollow</span>
                            :
                            <span>Follow</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UsersCard
