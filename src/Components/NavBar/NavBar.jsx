import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    name: "Home",
    path: "/home",
    id: 1,
  },
  {
    name: "About Us",
    path: "/about-us",
    id: 2,
  },
  {
    name: "Services",
    path: "/services",
    id: 3,
  },
  {
    name: "Contact",
    path: "/contact",
    id: 4,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 5,
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = navigationData.map((route) => (
    <li key={route.id}>
      <a href={route.path}>{route.name}</a>
    </li>
  ));
  return (
    <nav className="flex justify-between mx-8">
      <div className="flex gap-2 relative items-center justify-center">
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X></X> : <Menu></Menu>}
        </div>
        <ul className={`${open?'top-7':'-top-60'} absolute duration-500  left-0 bg-white text-black p-4 font-bold hover:bg-blue-500`}>{links}</ul>
        <h1>My NavBar</h1>
      </div>
      <ul className="lg:flex gap-10 hidden">
        {links}
        {/* {navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))} */}
      </ul>
      {/* <ul className='flex gap-10'>
                {
                    navigationData.map(route => <li key={route.id}><a href={route.path}>{ route.name}</a></li>)
                }
            </ul> */}

      {/* <ul className='flex gap-10'>
                <li><a href="/">Home</a></li>
                <li><a href="/about"></a>About</li>
                <li><a href="/blog"></a>Blog</li>
                <li><a href="/contact"></a>Contact</li>
            </ul> */}
      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;
