import Link from "next/link";

export default function MainLayout({ children }) {
  return (
    <>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
      <main>{children}</main>
    </>
  )
}