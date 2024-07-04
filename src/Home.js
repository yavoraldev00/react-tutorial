import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState("mario");

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs") // fetch request to server
            .then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
            })
        }, 1500);
    }, []) // tirggers only on first build

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "Blogs" handleDelete = {handleDelete}/> /* conditional templating */}
            <button onClick={() => {setName("luigi")}}>Change Name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>