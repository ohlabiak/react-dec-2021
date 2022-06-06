import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, user} = user;
    return (
        <div>
            {id}, {name} <Button state={user} to={id.toString()}>show inform</Button>
        </div>
    );
};

export {User};