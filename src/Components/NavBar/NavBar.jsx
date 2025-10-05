import React from 'react';
import Link from './Link';

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
    return (
        <nav>
            <ul className='flex gap-10'>

            {
                navigationData.map(route=><Link key={route.id} route={route}></Link>)
            }
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
        </nav>
    );
};

export default NavBar;