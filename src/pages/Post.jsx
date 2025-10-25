import { useParams, Link } from "react-router";
import { posts } from "../Posts.js";

function Post() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <section className="text-center text-gray-400">
                <p>Post not found</p>
            </section>
        );
    }

    return (
        <section className="mx-auto w-11/12 md:w-4/5 py-20 text-gray-200">
            <h1 className="text-4xl md:text-5xl font-light text-white">{post.title}</h1>
            <p className="text-sm mb-3 text-gray-500">{post.date}</p>
            <div className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }}></div>

            <div className="mt-3">
                <Link to="/posts" className="text-brand hover:underline">
                    Back
                </Link>
            </div>
        </section>
    );
}

export default Post;