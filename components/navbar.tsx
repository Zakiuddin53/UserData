import React from 'react';
import Link from 'next/link';

interface NavLink {
  path: string;
  label: string;
}

const navLinks: NavLink[] = [
  { path: '/about', label: 'User Details' }, 
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between h-16 bg-gray-800 text-white px-4">
      <h1 className="text-xl font-bold">My Website</h1>
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
            <li key={link.path}>
  <Link href={link.path} legacyBehavior>
    {link.label}
  </Link>
</li>

        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
