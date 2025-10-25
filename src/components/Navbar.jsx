function Navbar() {
    return (
        <nav
            className="sticky top-4 z-10 mb-8 mx-auto w-[75%]
                 bg-brand/5 backdrop-blur-xs border border-white/15 
                 rounded-full"
        >
            <div className="flex justify-center sm:justify-between items-center px-8 py-4 text-gray-200 text-lg font-extralight">
                <div className="hidden sm:block">
                    <a
                        href="#"
                        className="font-light text-white tracking-wide hover:text-brand"
                    >
                        DFelipeh's Corner
                    </a>
                </div>

                <div className="space-x-4 flex">
                    <a href="#" className="hover:text-brand">
                        Home
                    </a>
                    <a href="#posts" className="hover:text-brand">
                        Posts
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;