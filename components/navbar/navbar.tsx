import Link from "next/link"

export const NavbarWrapper = () => {
    return (
        // NAVBAR 
        <nav className="fixed w-full z-50 top-0 left-0 bg-cyan-200 backdrop-blur-md border-b border-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* LOGO  */}
                    <div className="flex items-center">
                        <strong className="text-2xl font-bold ">Kopi Jalanan</strong>
                    </div>

                    {/* DESKTOP  */}
                    <div className="hidden md:flex items-center space-x-10">
                        <Link href={'/about'} className="hover:text-cyan-400 transition-colors">About</Link>
                        <Link href={'/kopi'} className="hover:text-cyan-400 transition-colors">Kopi</Link>
                    </div>

                    {/* MOBILE */}
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white focus:outline-none">
                            BTN
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}