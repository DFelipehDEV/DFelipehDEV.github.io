import avatar from "../assets/Avatar500.png";
import PostList from "./PostList";

function Home() {
    return (
        <>
            <section className="mx-auto w-11/12 md:w-4/5 py-20 text-gray-200">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="md:col-span-3 order-2 md:order-1">
                        <h1 className="text-4xl md:text-5xl font-light mb-6 text-brand">
                            About
                        </h1>

                        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                            I enjoy making stuff. I work with languages like{" "}
                            <span className="text-white font-medium">C++</span>,{" "}
                            <span className="text-white font-medium">C#</span>,{" "}
                            <span className="text-white font-medium">Kotlin</span>,{" "}
                            <span className="text-white font-medium">Java</span>... I also do web
                            stuff and i like to use {" "}
                            <span className="text-white font-medium">JS</span>,{" "}
                            <span className="text-white font-medium">PHP</span>,{" "}
                            <span className="text-white font-medium">Laravel</span>, or{" "}
                            <span className="text-white font-medium">Tailwind</span>.
                        </p>

                        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                            I've done some web dev, a bit of backend, and I also like to think in
                            software architecture. I mostly just like making
                            things that look nice, write code that doesn't explode after a month,
                            and code that goes *vroom vroom*.
                        </p>
                    </div>

                    <div className="md:col-span-1 order-1 md:order-2 flex flex-col items-center mb-8 md:mb-0">
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/10 shadow-md object-cover"
                        />
                        <a
                            className="mt-3 text-center text-gray-400 italic hover:text-gray-300 transition"
                            href="https://x.com/Pablowsinistro2"
                            target="_blank"
                        >
                            Art by Pablo Tavares
                        </a>
                    </div>
                </div>
            </section>
            <PostList />
        </>
    );
}

export default Home;