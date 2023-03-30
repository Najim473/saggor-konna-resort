import BlogHeader from '../../components/Blogs/BlogHeader';
import BlogList from '../../components/Blogs/BlogsList';
import PopularBlogs from '../../components/Blogs/PopularBlogs';
const Blogs = ({ blogs }) => {
  // console.log(blogs);
  return (
    <div>
      <BlogHeader />
      <BlogList blogs={blogs} />
      <PopularBlogs blogs={blogs} />
    </div>
  );
};

export default Blogs;
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/blogData', {
    accept: 'application/json',
  });

  const blogs = await res.json();
  return {
    props: { blogs: blogs },
  };
}
