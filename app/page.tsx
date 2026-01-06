import Link from "next/link";

export default function Page(){
  return (
    <>
      <nav>
        <ul style={{ display:'flex', gap:'16px' }}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/kopi'>List</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
        <hr />
      </nav>
      <div>
        <strong>Hello World</strong>
      </div>
    </>
  )
}