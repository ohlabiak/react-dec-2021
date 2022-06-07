
const UserDetails = ({user}) => {
const {id, name, username, email, address, phone, website} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>address: {address.city}</div>
            <div>address: {address.street}</div>
            <div>address: {address.zipcode}</div>
            <div>address: {address.geo}</div>

        </div>
    );
};

export {UserDetails};