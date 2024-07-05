import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, errorMessage, isPending } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleDelete = () => {
        debugger;
        fetch("http://localhost:8000/blogs/" + id, { // fetch request for current blog
            method: "DELETE" // sends a delete request
        }).then(() => {
            history.push("/")
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { errorMessage && <div>{ errorMessage }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;