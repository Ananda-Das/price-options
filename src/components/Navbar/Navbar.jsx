import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt2 } from 'react-icons/Hi';
import { AiOutlineClose } from 'react-icons/Ai';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
      <div className="md:hidden text-3xl" onClick={()=> setOpen(!open)}>
        {
          open === true ? <AiOutlineClose></AiOutlineClose>:<HiMenuAlt2></HiMenuAlt2>
        }
      
      </div>
      <ul className="md:flex">
      {routes.map((route) => <Link key={route.id} route={route}></Link>)}
      </ul>
    </nav>
  );
};

export default Navbar;
