function Navbar() {
    return (
        <nav
            className="sticky top-4 z-10 mb-8 mx-auto w-[75%] sm:w-4/6 
                 bg-white/5 backdrop-blur-xs border border-white/15 
                 rounded-full"
        >
            <div className="flex justify-between items-center px-8 py-4 text-gray-200 text-lg font-extralight">
                <a
                    href="#"
                    className="font-light text-white tracking-wide hover:text-pink-400"
                >
                    DFelipeh's Corner
                </a>

                <div className="space-x-4 hidden sm:flex">
                    <a href="#" className="hover:text-pink-400">
                        Home
                    </a>
                    <a href="#" className="hover:text-pink-400">
                        Projects
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;