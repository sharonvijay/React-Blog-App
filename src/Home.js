import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');
    console.log(blogs,isPending,error);
    return (
        <div>
            <div className="home">
                {error ? <div>{error}</div> :
                isPending ? <div>Loading ...</div> : 
                <BlogList blogs = {blogs} title = 'All Blogs'/>}
                {/* {error && <div>{error}</div>}
                {isPending && <div>Loading ...</div>}
                {blogs && <BlogList blogs = {blogs} title = 'All Blogs'/>} */}
            </div>
        </div>
    );
}
 
export default Home;