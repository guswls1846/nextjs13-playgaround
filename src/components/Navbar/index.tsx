import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li className="navItem">
          <Link href="/">Home</Link>
        </li>
        <li className="navItem">
          <Link href="/about">About</Link>
        </li>
        <li className="navItem">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
