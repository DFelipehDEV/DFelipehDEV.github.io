import { Link } from "react-router";
import { posts } from "../Posts.js";

function PostList() {
    return (
        <section className="mx-auto w-11/12 md:w-4/5 py-20 text-gray-200">
            <h1 className="text-4xl md:text-5xl font-light mb-10 text-brand">Posts</h1>

            <div className="grid grid-cols-1 gap-6">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        to={`/post/${post.slug}`}
                        className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 block hover:bg-brand/10 hover:border-brand/40"
                    >
                        <h2 className="text-2xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-brand">
                            {post.title}
                        </h2>

                        <p className="text-sm text-gray-500 mb-4 transition-colors duration-300 group-hover:text-brand/70">
                            {post.date}
                        </p>

                        <p className="text-gray-400 mb-4 transition-colors duration-300 group-hover:text-brand/80">
                            {post.description}
                        </p>
                    </Link>
                ))}
            </div>

        </section>
    );
}

export default PostList;