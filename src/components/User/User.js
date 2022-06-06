import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            {id}, {name} <Button state={user} to={id.toString()}>show inform</Button>
        </div>
    );
};

export {
    User
}

// import { Button } from '../Button/Button';
//
// export const User = ({user}) => {
//     const {id, name} = user;
//     return (
//         <div>
//             {id}, {name} <Button state={user} to={id.toString()}>show info</Button>
//         </div>
//     );
// }