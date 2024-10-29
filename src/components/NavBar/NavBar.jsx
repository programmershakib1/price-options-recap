import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:username", name: "Profile" },
  ];
  return (
    <nav className="text-black bg-yellow-200 p-5">
        <div className="md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ? <AiOutlineClose className="text-2xl"></AiOutlineClose> : <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
            }
        </div>
      <ul className={`md:flex duration-1000 gap-10 ${open ? 'top-16' : '-top-60'} absolute md:static bg-yellow-200 px-5`}>
        {routes.map((route, idx) => (
          <Link key={idx} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
