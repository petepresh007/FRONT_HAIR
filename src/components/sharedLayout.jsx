import { FaHamburger } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import {useState} from "react"

export const SharedLayout = () => {
    const [showNav, setShowNav] = useState(false);

    function setNavigation(){
        if(showNav){
            setShowNav(false)
        }else{
            setShowNav(true)
        }
    }

    return <>
        <div className="nav-button">
            <div className="flex items-center justify-between bg-black m-0 p-3  sm:hidden text-white">
                <div className="limage">
                    filter
                </div>
                <FaHamburger onClick={setNavigation}/>
            </div>
            {/* bg-black w-full flex items-center justify-between p-7 text-2xl sm:mt-0 hidden sm:flex */}
            
            <div className={showNav ? "navshar show-nav " : "navshar  bg-black w-full flex items-center justify-between p-7 text-2xl sm:mt-0 hidden sm:flex"}>
                <nav className="link-container pl-4">
                    <Link to="/">Home</Link>
                    <Link to="/allproduct">AllProduct</Link>
                    <Link to="/wigs">Wigs</Link>
                    <Link to="/accessories">Accessories</Link>
                </nav>
                <div className="reg-section pr-4">
                        <Link to="/registration">Sign up</Link>
                        <Link to="/login">Sign in</Link>
                        <span>Filter</span>
                </div>
            </div>
        </div>
        <Outlet />
    </>
}