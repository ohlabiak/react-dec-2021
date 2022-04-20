
// const Car = (props) => {
    // const {name, img}  = props;
    const Car = ({name, img}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
        </div>
    );
};

export default Car;