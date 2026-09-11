import React from "react";

const NavBar = () => {
  const navItems = [
    {
      id: 1,
      title: "Services",
      path: "/services",
    },
    {
      id: 2,
      title: "Work",
      path: "/work",
    },
    {
      id: 3,
      title: "About",
      path: "/about",
    },
    {
      id: 4,
      title: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <ul className="flex gap-4">
      {navItems.map((nav) => {
        return (
          <li key={nav.id} className="text-xl">
            {nav.title}
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
