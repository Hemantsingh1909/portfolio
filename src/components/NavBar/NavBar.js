
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'


const NavBar = () => {
  return (
    <>
        <div className="relative shadow sticky z-50 top-0 font-sans">
            <div className='flex justify-around flex-wrap items-center mx-auto'>
            <Link 
            className='bg-transparent'
            to='/'>
            <img  className='relative flex mx-auto h-24 w-32 object-cover flex items-center' src={logo} alt="logo" />
            </Link>
                    <div className='flex justify-around items-center'>
                        <ul className='flex gap-14'>
                            <li>
                            <NavLink 
                            to="/"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#496CF6]" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#496CF6] lg:p-0`
                            }
                            >
                                Home
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="/about"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#496CF6]" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#496CF6] lg:p-0`
                            }
                            >
                                About
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="/services"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#496CF6]" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#496CF6] lg:p-0`
                            }
                            >
                                Services
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="/pricing"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#496CF6]" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#496CF6] lg:p-0`
                            }
                            >
                                Pricing
                            </NavLink>
                            </li>
                            <li>
                            <NavLink 
                            to="/contact"
                            className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#496CF6]" : "text-black"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#496CF6] lg:p-0`
                            }
                            >
                                Contact
                            </NavLink>
                            </li>
                            <li className="relative group">
                            <NavLink
                                to="/"
                                className={({isActive}) =>
                                `py-2 pr-4 pl-3 duration-200 block ${isActive ? "text-[#496CF6]" : "text-black"} border-b border-gray-100 lg:border-0 lg:p-0 hover:text-[#496CF6]`
                                }
                            >
                                Pages <i className="fas fa-chevron-down ml-2"></i>
                            </NavLink>
                            <ul className="absolute hidden mt-6 w-56 h-32 space-y-3 bg-white flex flex-col pl-10 justify-center items-start text-sm shadow-2xl -m-14 z-10 group-hover:flex">
                                <li>
                                <NavLink to="/" 
                                className={({isActive}) =>
                                `py-2 pr-4 pl-3 duration-200 block ${isActive ? "text-black" : "text-black"} border-b border-gray-100 lg:border-0 lg:p-0 hover:text-[#496CF6]`
                                }
                                >
                                    Portfolio Details Page
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/"
                                className={({isActive}) =>
                                `py-2 pr-4 pl-3 duration-200 block ${isActive ? "text-black" : "text-black"} border-b border-gray-100 lg:border-0 lg:p-0 hover:text-[#496CF6]`
                                }
                                >
                                    Blog Grids Page
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/"
                                className={({isActive}) =>
                                `py-2 pr-4 pl-3 duration-200 block ${isActive ? "text-black" : "text-black"} border-b border-gray-100 lg:border-0 lg:p-0 hover:text-[#496CF6]`
                                }
                                >
                                    Blog Details Page
                                </NavLink>
                                </li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                <button type="button" className="text-white bg-[#496CF6] hover:bg-[#5B7BF8] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download CV</button>
            </div>
        </div>
    </>
  )
}

export default NavBar
