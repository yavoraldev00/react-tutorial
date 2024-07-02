import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1},
        { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2},
        { title: "Web dev top tips", body: "lorem ipsum...", author: "luigi", id: 3},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState("mario");

    useEffect(() => {
        console.log("useEffect triggered!");
        console.log(name)
    }, [name]) // tirggers only when watched value "name" is changed

    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "Blogs" handleDelete = {handleDelete}/>
            <button onClick={() => {setName("luigi")}}>Change Name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>