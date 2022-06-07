import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            {id}--{name} <Link to={`${id}`} state={user}>get Detail</Link>
        </div>
    );
};

export {User};