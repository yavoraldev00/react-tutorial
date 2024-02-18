const Home = () => {

    const handleClick = (e) => {
        console.log("Hello, ninjas", e);
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {handleClickAgain("mario",e)}}>Click me handleClickAgain</button>
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>