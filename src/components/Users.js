const Users = () => {
    let users = [];
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => users = value)
    return (
        <div>

        </div>
    );
};

export default Users;