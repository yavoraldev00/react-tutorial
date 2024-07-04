import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ( { blogs, title }) => { // desctrucutre props in param field
    // const blogs = props.blogs; // defining props
    // const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;