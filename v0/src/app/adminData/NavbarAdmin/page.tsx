import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/adminData/LoginAdmin">Login Admin</Link>
      <Link href="/adminData/RegisterAdmin">Register Admin</Link>
      <Link href="/adminData/ProfileAdmin" legacyBehavior>
        <a>Profile</a>
      </Link>
    </nav>
  );
}
