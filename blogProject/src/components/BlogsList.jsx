import  {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const BlogsList = () =>{
    const blogs = useSelector((state) => state.blogs);

    const renderedBlogs = blogs.map(blog =>(
       <article className="blog-excerpt">
           <h3>{blog.title}</h3>
           <p className="blog-content">{blog.content.substring(0,100)}</p>

           <Link to={`/blogs/${blog.id}`} className="button muted-button">دیدن کامل =ست</Link>
       </article>
    ));
    return(
        <section className="blog-list">
            <h2>تمامی پست ها</h2>
        </section>
    )
}
export default BlogsList;