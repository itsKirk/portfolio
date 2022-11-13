import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsPersonLinesFill } from 'react-icons/bs'
// import Link from 'next/link'
import logo from '../public/logo.png'
import { Link } from 'react-scroll'
function Navbar({ children }) {
    const [mobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!mobileMenu)
    return (
        <>
            <div className='fixed w-full mx-auto h-[80px] flex z-[55]  justify-between items-center px-24 bg-[#0a192f] text-gray-300 mb-[50px]'>
                {/* logo/brand */}
                <Link to='home' smooth={true}>
                    <Image src={logo} height={200} width={200} alt='hero' className='left-0 cursor-pointer' />
                </Link>
                {/* menu */}
                <ul className='hidden md:flex absolute right-28'>
                    <Link to='home' smooth={true} className='text-lg cursor-pointer font-normal space-x-4 mx-2'>Home</Link>
                    <Link to='about' smooth={true} className='text-lg cursor-pointer font-normal space-x-4 mx-2'>About</Link>
                    <Link to='skills' smooth={true} className='text-lg cursor-pointer font-normal space-x-4 mx-2'>Skills</Link>
                    <Link to='work' smooth={true} className='text-lg cursor-pointer font-normal space-x-4 mx-2'>Work</Link>
                    <Link to='contact' smooth={true} className='text-lg cursor-pointer font-normal space-x-4 mx-2'>Contact</Link>
                </ul>
                {/* hamburger */}
                <div onClick={handleMobileMenu} className="z-10 md:hidden cursor-pointer">
                    {mobileMenu ? <FaTimes /> : <FaBars />}
                </div>
                {/* mobile menu */}
                <ul className={mobileMenu ? 'absolute top-0 left-0 bg-[#0a192f] w-full h-screen flex flex-col justify-center items-center md:hidden ' : 'hidden'}>
                    <Link to='home' smooth={true} onClick={handleMobileMenu} className='py-6 text-4xl font-bold cursor-pointer'>Home</Link>
                    <Link to='about' smooth={true} onClick={handleMobileMenu} className='py-6 text-4xl font-bold cursor-pointer'>About</Link>
                    <Link to='skills' smooth={true} onClick={handleMobileMenu} className='py-6 text-4xl font-bold cursor-pointer'>Skills</Link>
                    <Link to='work' smooth={true} onClick={handleMobileMenu} className='py-6 text-4xl font-bold cursor-pointer'>Work</Link>
                    <Link to='contact' smooth={true} onClick={handleMobileMenu} className='py-6 text-4xl font-bold cursor-pointer'>Contact</Link>
                </ul>
            </div>
            {/* social icons */}
            <div className='hidden md:flex fixed flex-col justify-evenly left-0 top-[35%]'>
                <ul>
                    <Link to='https://www.linkedin.com/in/drwambua/' className='flex justify-between items-center w-[100px] ml-[-65px] hover:ml-[0px] duration-500 cursor-pointer'>
                        <span className='font-bold text-white'>LinkedIn</span>
                        <FaLinkedinIn size={30} />
                    </Link>
                    <Link to='https://twitter.com/DrWambua' className='flex justify-between items-center w-[100px] ml-[-65px] hover:ml-[0px] duration-500 cursor-pointer'>
                        <span className='font-bold text-white'>Twitter</span>
                        <FaTwitter size={30} />
                    </Link>

                    <Link to='https://github.com/itsKirk' className='flex justify-between items-center w-[100px] ml-[-65px] hover:ml-[0px] duration-500 cursor-pointer'>
                        <span className='font-bold text-white'>Github</span>
                        <FaGithub size={30} />
                    </Link>
                    <Link to='contact' smooth={true} className='flex justify-between items-center w-[100px] ml-[-65px] hover:ml-[0px] duration-500 cursor-pointer'>
                        <span className='font-bold text-white'>E Mail</span>
                        <HiOutlineMail size={30} />
                    </Link>
                    <Link to='/' className='flex justify-between items-center w-[100px] ml-[-65px] hover:ml-[0px] duration-500 cursor-pointer'>
                        <span className='font-bold text-white'>Resume</span>
                        <BsPersonLinesFill size={30} />
                    </Link>
                </ul>
            </div>
            <div className="absolute top-24 mx-5">
                {children}
            </div>
        </>
    )
}

export default Navbar