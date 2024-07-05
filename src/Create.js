import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;