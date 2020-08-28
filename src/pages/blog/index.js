import Info from '../../components/Info/Info'
import Head from 'next/head'
import Nav from '../../components/NavBar/Nav'



import { getMarkdownFiles } from '../../../src/util/util'
import Link from 'next/link'
import Post from '../../components/Post/Post'



const Blog = ({ posts }) => {
    return (
        <div>
            <Head>
                <title>My Portfolio</title>
                <link href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
            </Head>
            <Info />
            <Nav />
            {posts.map((post) => (
                <Link
                    href="blog/[slug]"
                    as={`blog/${post.slug}`}
                    key={post.slug}
                >
                    <a>
                        <Post 
                        postTitle={post.data.title}
                        subtitle={post.data.description}
                        date={post.data.date}
                        length={post.data.time}
                        color={post.data.dateColor}
                        />
                    </a>
                </Link>
            ))}
            <style jsx>
				{`
					a {
						text-decoration: none;
                        color: inherit;
                    }

                    a:hover {
                        transition: opacity .15s ease-in;
                    }

				`}
			</style>
        </div>
    )
}


export async function getStaticProps() {
    return { props: {posts: getMarkdownFiles('BlogPosts/work')}}
}


export default Blog