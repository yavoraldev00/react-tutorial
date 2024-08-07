import { useState } from "react";
import { useHistory } from "react-router-dom"; // used for history control / navigation

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsPending(false);
            history.push("/"); // navigates to main page
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                type="text"
                value = {title} // state value associated with input
                onChange={(e) => {setTitle(e.target.value)}} // changes state to reflect element text
                required
                />
                <label>Blog body:</label>
                <textarea
                value = {body}
                onChange={(e) => {setBody(e.target.value)}}
                required
                ></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e) => {setAuthor(e.target.value)}}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;