import {useParams} from "react-router-dom";
import useFetch from './useFetch';
import {useHistory} from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog,isPending,error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClicks = ()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{ //use variable for urls
            method :'DELETE'
        })
        .then(()=>{
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClicks}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;