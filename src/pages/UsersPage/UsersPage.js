import {useEffect, useState} from "react";

import {User} from "../../components";
import {userService} from "../../services";

const UsersPage = () => {
     const [users, setUsers] = useState(null);

     useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
     },[])

    return (
        <div>
            {
                users
                    ? users.map(user => <User key={user.id} user={user}/>)
                    :'Loading..'
            }
        </div>
    );
};

export {UsersPage};