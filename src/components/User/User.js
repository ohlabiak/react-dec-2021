import React from 'react';

const User = ({user, setUserDetails}) => {
    const {id, name} = user;
    return (
        <div>
            {id}.) {name}
            <button onClick={()=>setUserDetails(user)}>getDetails</button>
        </div>
    );
};

export {User};