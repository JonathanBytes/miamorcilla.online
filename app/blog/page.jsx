import BlogCard from '../components/BlogCard/BlogCard';
import { getAllFilesMetadata } from '@/lib/mdxFrontmatter';

const filesMetadata = getAllFilesMetadata()

export default function Blog() {
  return (
    <>
      <h1>Posts del blog</h1>
      <ul className="blog-list" style={{ paddingLeft: 0 }}> {filesMetadata.map((post) => (
        <BlogCard
          key={post.slug}
          slug={'/post/' + post.slug}
          image={post.image}
          date={post.date}
          title={post.title}
          description={post.description}
          categories={post.categories}
        />
      ))}
      </ul>
    </>
  )
}
