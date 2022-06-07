import {useEffect, useState} from "react";
import {Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {
    const [user, setUser] = useState(state);
    const {userId} = useParams();
    const {state} = useLocation();

    useEffect(() =>{
        if (!state){
            userService.getById(userId).then(({data})=>setUser(data))
        }
        else {
            setUser(state)
        }
    },[userId, state])
    return (
        <div>
            <div>
                {user && <UserDetails user={user}/>}
            </div>
            <Outlet/>
        </div>
    );
};

export {SingleUserPage};



//
// import { useLocation, useParams, Outlet } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { userService } from '../../services';
// import {UserDetails} from "../../components";
//
//
//
//  const SingleUserPage = () => {
//     const { state } = useLocation();
//     const [user, setUser] = useState(state);
//     const { userId } = useParams();
//
//     useEffect(() => {
//         if (!state) {
//             userService.getById(userId).then(({ data }) => setUser(data))
//         } else {
//             setUser(state)
//         }
//     }, [userId, state])
//     return (
//         <div>
//             <div>
//                 {user && <UserDetails user={user}/>}
//             </div>
//             <Outlet/>
//         </div>
//     );
// }
//
// export {
//     SingleUserPage
// }