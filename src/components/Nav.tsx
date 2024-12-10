"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="w-full h-20 bg-gradient-to-r from-cyan-600 to-blue-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo */}
          <div className="flex justify-center items-center"> 
            <Link href="/" className="text-2xl font-bold text-white hover:text-sky-100 transition-colors duration-200 flex items-center gap-2">
              <span className="bg-white text-blue-600 px-3 py-1 rounded-lg transform hover:scale-105 transition-transform duration-200">Ticket</span>
              <span>Hub</span>
            </Link>            
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="flex flex-col gap-2 items-center justify-center w-8 h-8 space-y-1 transition-all duration-200 ease-in-out"
              aria-label="Toggle menu"
            > 
              <span className={`block rounded h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
              <span className={`block rounded h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${open ? "opacity-0" : ""}`} />
              <span className={`block rounded h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
            </button>
          </div>

          {/* Links */}
          <ul className={`md:flex text-center items-center justify-center gap-6 text-white ${
            open 
              ? "flex flex-col absolute top-20 left-0 right-0 bg-gradient-to-r from-cyan-600 to-blue-600 w-full p-6 shadow-lg space-y-4 md:space-y-0 animate-fadeIn" 
              : "hidden md:flex"
          }`}>
            <li>
              <Link href="/" className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                pathname === "/" 
                  ? "bg-white/10 font-medium" 
                  : "hover:bg-white/5"
              }`}>
                Home
              </Link>
            </li>
            
            <li>
              <Link href="/events" className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                pathname === "/events" 
                  ? "bg-white/10 font-medium" 
                  : "hover:bg-white/5"
              }`}>
                Events
              </Link>
            </li>
            
            <li>
              <Link href="/about" className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                pathname === "/about" 
                  ? "bg-white/10 font-medium" 
                  : "hover:bg-white/5"
              }`}>
                About Us
              </Link>
            </li>

            <li>
              <Link href="/sign-up" className="ml-4">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-sky-100 transition-colors duration-200 transform hover:scale-105">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav