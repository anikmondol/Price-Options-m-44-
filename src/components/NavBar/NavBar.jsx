import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/services', name: 'Services' },
        { id: 5, path: '/profile/:userId', name: 'Profile' }
    ];



    return (
        <nav className="flex justify-between mx-3   mt-2 text-black bg-yellow-200 p-2 content-center rounded-lg">
            
            <section>
                <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                    {
                        open === true ? <CiMenuBurger></CiMenuBurger>  : <IoMdClose></IoMdClose> 
                    }
                
                

                </div>
            <ul className={`md:flex duration-1000 absolute md:static 
            ${open ? 'top-12' :  '-top-60'}
            bg-yellow-200 mt-3 px-5 rounded-lg pb-2`}>
                {
                    routes.map((route, index) => <Link key={index} route={route}></Link>)
                }
            </ul>
            </section>
            <button className="bg-green-500 text-white p-3 rounded-md font-medium">Add Now</button>
        </nav>
    );
};

export default NavBar;