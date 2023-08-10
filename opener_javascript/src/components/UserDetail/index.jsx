import React from "react";
import './style.scss'

// user type 
// user: {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone_number: string;
//   department: string;
//   city: string;
// }

export const UserDetail = ({user}) => {

    return <div className="UserDetail">
        <h1 className="UserDetail-Title">Showing details for user {user.first_name} {user.last_name}</h1>
        <div className="UserDetail-Details">
            <table className="UserDetail-Table">
                <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                    {Object.keys(user).map((key) => {
                        return <tr key={key}>
                            <td>{key}</td>
                            <td>{user[key]}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
}