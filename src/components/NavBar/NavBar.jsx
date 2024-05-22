import Link from "../Link/Link";


const NavBar = () => {


    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/services', name: 'Services' },
        { id: 5, path: '/profile/:userId', name: 'Profile' }
    ];



    return (
        <nav className="flex justify-between mx-3 items-start md:items-center mt-2">
            <ul className="md:flex">
                {
                    routes.map((route, index) => <Link key={index} route={route}></Link>)
                }
            </ul>
            <button className="bg-yellow-300 text-red-400 p-3 rounded-xl font-medium">Add Now</button>
        </nav>
    );
};

export default NavBar;