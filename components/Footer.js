import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white px-4 py-4">
      <div className="flex flex-col items-center justify-center gap-1 text-center text-sm">
        <p>
          © {currentYear} FundCup. All rights reserved.
        </p>
        <p className="text-gray-400">
          Developed by Abhishek
        </p>
      </div>
    </footer>
  )
}

export default Footer