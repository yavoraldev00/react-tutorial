import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, errMessage } = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {errMessage && <div>{errMessage}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title = "Blogs"/> /* conditional templating */}
        </div>
     );
}
 
export default Home;
<div className="home">
    <h2>Homepage</h2>
</div>