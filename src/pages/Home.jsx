import avatar from '../assets/Avatar500.png';

function Home() {
    return (
        <section className="mx-auto w-4/5 py-24 text-gray-200">
            <div className="flex justify-between items-center gap-3">
                <div className="flex-col">
                    <h1 className="text-5xl font-light mb-6 text-brand">About</h1>

                    <p className="text-lg text-gray-400 leading-relaxed mb-6">
                        I enjoy making stuff. I work with systems languages like{" "}
                        <span className="text-white font-medium">C++</span>,{" "}
                        <span className="text-white font-medium">C#</span>,{" "}
                        <span className="text-white font-medium">Kotlin</span>,{" "}
                        <span className="text-white font-medium">Java</span>...
                        I also do web stuff sometimes using{" "}
                        <span className="text-white font-medium">JavaScript</span>,{" "}
                        <span className="text-white font-medium">PHP</span>,{" "}
                        <span className="text-white font-medium">Laravel</span>,{" "}
                        and <span className="text-white font-medium">Tailwind</span> when I feel like it.
                    </p>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        I've done some <span className="text-white font-medium">web dev</span>,{" "}
                        a bit of <span className="text-white font-medium">backend</span>, and I also like
                        messing with <span className="text-white font-medium">software architecture</span> — still getting the hang of it though.
                        I mostly just like making things that look nice, write code that doesn't explode after a month,
                        and code that goes *vroom vroom*.
                    </p>
                </div>

                <div className="flex-col">
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="rounded-full"
                    />
                    <div className="flex justify-center">
                        <small className="mt-3 text-gray-400 italic">Art by Pablo Tavares</small>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;