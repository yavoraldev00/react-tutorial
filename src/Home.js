import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errMessage, setErrMessage] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs") // fetch request to server
            .then((res) => {
                if(!res.ok){ // error handling after connecting to server
                    throw Error("Could not fetch data from resource") // creates error messages
                }
                return res.json();
            }).then((data) => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
                setErrMessage(null);
            }).catch(err => { // error on encountered problem in connection
                setIsPending(false);
                setErrMessage(err.message);
            })
        }, 1500);
    }, []) // tirggers only on first build

    return ( 
        <div className="home">
            {errMessage && <div>{errMessage}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "Blogs" handleDelete = {handleDelete}/> /* conditional templating */}
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>