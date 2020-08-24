import { getMarkdownFile } from '../../util/util';
import FullPost from '../../components/FullPost/FullPost'

const BlogPost = ({ post }) => {
    return (
        <FullPost 
        title={post.data.title}
        date={post.data.date}
        postContent={post.content}
        image={post.data.img}
        />
    )
}

// function that obtains all paths
export async function getStaticPaths() {
    const fs = require('fs')
    const markdownPosts = fs.readdirSync('BlogPosts/work')
    const paths = markdownPosts.map((post) => `/blog/${post.slice(0, -3)}`)
    return { paths, fallback: false}
}


export async function getStaticProps({ params }) {
    return {
        props: { post: getMarkdownFile(`BlogPosts/work/${params.slug}.md`) },
    }
}

export default BlogPost