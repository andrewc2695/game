import React, {useCallback, useEffect, useState} from 'react';
import { users } from './users';
import './style.scss'
import { UserList } from '../UserList';
import { UserDetail } from '../UserDetail';

// users type 
// users: {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone_number: string;
//   department: string;
//   city: string;
// } []

function UserInterface() {

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [filterText, setFilterText] = useState('');
  const [selectedUser, setSelectedUser] = useState();

  const filterUsers = useCallback(() => {
    if(filterText){
      setFilteredUsers(users.filter((user) => {
        const lowerCaseFilter = filterText.toLocaleLowerCase();
        const {first_name, last_name, email} = user
        if (`${first_name.toLocaleLowerCase()} ${last_name.toLocaleLowerCase()}`.includes(lowerCaseFilter)) return true;
        if (email.toLocaleLowerCase().includes(lowerCaseFilter)) return true;
        return false;
      }));
    }else{
      setFilteredUsers(users);
    }
  }, [filterText])

  useEffect(() => {
    filterUsers(filterText)
  }, [filterText, filterUsers])



  return (
    <div className="UserInterface">
      <div className='UserInterface-SearchBar'>
        Filter users by Name or Email:  
        <input type={'text'} value={filterText}
          placeholder='type to start filtering...' 
          onChange={(e) => setFilterText(e.target.value)}
          />
      </div>
      <div className='UserInterface-UsersContainer'>
        <div className='UserInterface-UserList'>
          <UserList users={filteredUsers} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        </div>
        {selectedUser && <div className='UserInterface-UserDetail'>
          <UserDetail user={selectedUser}/>
        </div>}
      </div>
    </div>
  );
}

export default UserInterface;
