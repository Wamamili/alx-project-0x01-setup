import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">React Architect</h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
