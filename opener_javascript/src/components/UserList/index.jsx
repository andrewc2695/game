import React from "react";
import './style.scss';

export const UserList = ({users, selectedUser, setSelectedUser}) => {

    return <div className="UserList">
        <div className="UserList-Title">Users</div>
        <div className="UserList-ListContianer">
            <div className="UserList-List">
                {users.map((user) => {
                    const className = selectedUser?.id === user.id ?
                        "UserList-User UserList-Selected" : "UserList-User";
                    return <div className={className} key={user.id} onClick={() => setSelectedUser(user)}>
                        {user.first_name}{' '}{user.last_name}
                    </div>
                })}
            </div>
        </div>
    </div>
}