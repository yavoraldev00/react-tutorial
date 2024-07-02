const BlogList = ( { blogs, title, handleDelete }) => { // desctrucutre props in param field
    // const blogs = props.blogs; // defining props
    // const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick = {() => {handleDelete(blog.id)}}>Delete Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;