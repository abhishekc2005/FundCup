"use client"
import React, { useState } from 'react'
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav className='bg-gray-900 shadow-xl shadow-white text-white flex justify-between items-center px-4 md:h-16'>

      <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
        <img className='invertImg' src="tea.gif" width={44} alt="logo" />
        <span className='text-xl md:text-base my-3 md:my-0'>FundCup!</span>
      </Link>

      <Link href="/">
  <button className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700">
    🏠 
  </button>
</Link>

      <div className='relative flex items-center gap-4'>
        {session ? (
          <>
            {/* Account Button */}
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 inline-flex items-center"
            >
              Welcome @{session.user.name}
              <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 top-12 z-10 w-44 rounded-lg bg-white shadow dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      onClick={() => setShowDropdown(false)}
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setShowDropdown(false)}
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setShowDropdown(false)
                        signOut()
                      }}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link href="/login">
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm px-5 py-2.5'>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar