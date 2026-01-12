import Link from "next/link"

export const NavbarWrapper = () => {
    return (
        <>
            <div className="bg-cyan-400 flex gap-4 my-2">
                <Link href='/'>Home</Link>
                <Link href='/kopi'>List</Link>
                <Link href='/about'>About</Link>
            </div>
            <hr />
        </>
    )
}