import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'
import logo from '../public/logo.png'
import { Link as Switch } from 'react-scroll'
function Navbar({ children }) {
    const [mobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!mobileMenu)
    return (
        <>
            <div className='fixed w-full mx-auto h-[80px] flex z-[55]  justify-between items-center px-24 bg-[#0a192f] text-gray-300 mb-[50px]'>
                {/* logo/brand */}
                <Switch to='home' smooth={true}>
                    <Image src={logo} height={200} width={200} alt='hero' className='left-0 cursor-pointer' />
                </Switch>
                {/* menu */}
                <ul className='hidden md:flex absolute right-28'>
                    <Switch to='home' smooth={true} className='text-lg cursor-pointer font-normal space-x-4 mx-2 hover:text-[#7abe41]'>Home</Switch>
                    <Switch to='about' smooth={true} className='text-lg cursor-pointer font-normal space-x-4 mx-2 hover:text-[#7abe41]'>About</Switch>
                    <Switch to='skills' smooth={true} className='text-lg cursor-pointer font-normal space-x-4 mx-2 hover:text-[#7abe41]'>Skills</Switch>
                    <Switch to='work' smooth={true} className='text-lg cursor-pointer font-normal space-x-4 mx-2 hover:text-[#7abe41]'>Work</Switch>
                    <Switch to='contact' smooth={true} className='text-lg cursor-pointer font-normal space-x-4 mx-2 hover:text-[#7abe41]'>Contact</Switch>
                </ul>
                {/* hamburger */}
                <div onClick={handleMobileMenu} className="z-10 md:hidden cursor-pointer">
                    {mobileMenu ? <FaTimes /> : <FaBars />}
                </div>
                {/* mobile menu */}
                <ul className={mobileMenu ? 'absolute top-0 left-0 bg-[#0a192f] w-full h-screen flex flex-col justify-center items-center md:hidden ' : 'hidden'}>
                    <Switch to='home' smooth={true} onClick={handleMobileMenu} className='py-6 text-4xl font-bold  cursor-pointer hover:text-[#7abe41]'>Home</Switch>
                    <Switch to='about' smooth={true} onClick={handleMobileMenu} className='py-6 text-4xl font-bold cursor-pointer hover:text-[#7abe41]'>About</Switch>
                    <Switch to='skills' smooth={true} onClick={handleMobileMenu} className='py-6 text-4xl font-bold cursor-pointer hover:text-[#7abe41]'>Skills</Switch>
                    <Switch to='work' smooth={true} onClick={handleMobileMenu} className='py-6 text-4xl font-bold cursor-pointer hover:text-[#7abe41]'>Work</Switch>
                    <Switch to='contact' smooth={true} onClick={handleMobileMenu} className='py-6 text-4xl font-bold cursor-pointer hover:text-[#7abe41]'>Contact</Switch>
                </ul>
            </div>
            {/* social icons */}
            <div className='hidden md:flex fixed flex-col justify-evenly left-0 top-[35%]'>
                <ul>
                    <Link href='https://www.Linkedin.com/in/drwambua/' target='_blank' className='flex justify-between items-center w-[100px] ml-[-65px] hover:ml-[0px] duration-500 cursor-pointer'>
                        <span className='font-bold text-white'>LinkedIn</span>
                        <FaLinkedinIn className='text-[#7abe41]' size={30} />
                    </Link>
                    <Link href='https://twitter.com/DrWambua' target='_blank' className='flex justify-between items-center w-[100px] ml-[-65px] hover:ml-[0px] duration-500 cursor-pointer'>
                        <span className='font-bold text-white'>Twitter</span>
                        <FaTwitter size={30} className='text-[#7abe41]' />
                    </Link>

                    <Link href='https://github.com/itsKirk' target='_blank' className='flex justify-between items-center w-[100px] ml-[-65px] hover:ml-[0px] duration-500 cursor-pointer'>
                        <span className='font-bold text-white'>Github</span>
                        <FaGithub size={30} className='text-[#7abe41]' />
                    </Link>
                    <Switch to='contact' smooth={true} className='flex justify-between items-center w-[100px] ml-[-65px] hover:ml-[0px] duration-500 cursor-pointer'>
                        <span className='font-bold text-white'>E Mail</span>
                        <HiOutlineMail size={30} className='text-[#7abe41]' />
                    </Switch>
                    <Link href='Patrick&apos;s CV.pdf' download='Patrick&apos;s CV.pdf' className='flex justify-between items-center w-[100px] ml-[-65px] hover:ml-[0px] duration-500 cursor-pointer'>
                        <span className='font-bold text-white'>Resume</span>
                        <BsPersonLinesFill size={30} className='text-[#7abe41]' />
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