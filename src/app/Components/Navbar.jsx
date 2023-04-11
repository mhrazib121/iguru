import React from 'react';
// import Logo from "@/assets/logo-light.png";
import Logo from "../assets/logo-light.png";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className='text-white'><Link href="/about" >About</Link></li>
        <li className='text-white'><Link href="/appointment">Appointment</Link></li>
        <li className='text-white'><Link href="/">Contact Us</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link href="/home" className="text-xl w-24">
                    <Image src={Logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/postcss.config.js" className="btn">Get started</Link>
            </div>
        </div>
    );
};

export default Navbar;