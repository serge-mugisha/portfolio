import React, { useState } from "react";
import Icon from "@/components/Icon";
import { NextLink as Link } from "@/components/NextLink";

export default function NavBar({ bg, footer }: { bg?: string, footer?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (footer) {
    return (
      <header className={`box flex justify-center py-4 ${bg ?? ""}`}>
        <div className="md:hidden">
          <Link href="/" className="text-2xl font-medium font-logo">
            Serge Mugisha
          </Link>
        </div>
        <div className="hidden md:block w-full">
          <div className={`box flex flex-row place-content-around items-center py-4 ${bg ?? ""}`}>
            {/* Navigation Links */}
            <div className="flex flex-row basis-1/3 place-content-start items-center">
              <Link
                className="px-3 font-semibold transition-colors duration-200 hover:text-gray-600"
                href="/#work"
              >
                Work
              </Link>
              <Link
                className="px-3 font-semibold transition-colors duration-200 hover:text-gray-600"
                href="/#about"
              >
                About
              </Link>
              <Link
                className="px-3 font-semibold transition-colors duration-200 hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1N-tJ5MMt5N9b3erNF6iA57A9OAXTtwJ8/view?usp=share_link"
              >
                Resume
              </Link>
            </div>

            {/* Logo */}
            <div className="flex basis-1/3 place-content-center">
              <Link href="/" className="text-2xl font-medium font-logo">
                Serge Mugisha
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-row basis-1/3 place-content-end space-x-4">
              <Link
                className="font-medium"
                href="https://github.com/serge-mugisha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" height={28} width={28} color="#4F4F4F" />
              </Link>
              <Link
                className="font-medium"
                href="https://www.linkedin.com/in/serge-mugisha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" height={28} width={28} color="#4F4F4F" />
              </Link>
              <Link
                className="font-medium"
                href="https://www.behance.net/serge-mugisha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="behance" height={28} width={28} color="#4F4F4F" />
              </Link>
              {/* <Link
                className="font-medium"
                href="https://www.instagram.com/sergeartz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" height={28} width={28} color="#4F4F4F" />
              </Link> */}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`box flex flex-col md:flex-row place-content-around items-center py-4 sticky ${
        bg ?? ""
      }`}
    >
      {/* Mobile Menu Button */}
      <div className="w-full md:hidden flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-medium font-logo">
          Serge Mugisha
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 hover:text-gray-700"
        >
          <Icon
            name={isMenuOpen ? "menuClose" : "menuOpen"}
            height={24}
            width={24}
            color="#4F4F4F"
          />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`
          transform transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 md:opacity-100 md:translate-y-0 pointer-events-none md:pointer-events-auto'}
          md:transform-none
          md:flex flex-col md:flex-row w-full space-y-4 md:space-y-0 mt-4 md:mt-0
        `}
      >
        <div className="flex flex-col md:flex-row md:basis-1/3 place-content-start items-center space-y-4 md:space-y-0">
          <Link
            className="px-3 font-semibold transition-colors duration-200 hover:text-gray-600"
            href="/#work"
          >
            Work
          </Link>
          <Link
            className="px-3 font-semibold transition-colors duration-200 hover:text-gray-600"
            href="/#about"
          >
            About
          </Link>
          <Link
            className="px-3 font-semibold transition-colors duration-200 hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1N-tJ5MMt5N9b3erNF6iA57A9OAXTtwJ8/view?usp=share_link"
          >
            Resume
          </Link>
        </div>

        {/* Logo - Hidden on mobile when menu is closed */}
        <div className="hidden md:flex md:basis-1/3 place-content-center">
          <Link href="/" className="text-2xl font-medium font-logo">
            Serge Mugisha
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex flex-row md:basis-1/3 place-content-center md:place-content-end space-x-4">
          <Link
            className="font-medium"
            href="https://github.com/serge-mugisha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" height={28} width={28} color="#4F4F4F" />
          </Link>
          <Link
            className="font-medium"
            href="https://www.linkedin.com/in/serge-mugisha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" height={28} width={28} color="#4F4F4F" />
          </Link>
          <Link
            className="font-medium"
            href="https://www.behance.net/serge-mugisha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="behance" height={28} width={28} color="#4F4F4F" />
          </Link>
          {/* <Link
            className="font-medium"
            href="https://www.instagram.com/sergeartz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="instagram" height={28} width={28} color="#4F4F4F" />
          </Link> */}
        </div>
      </div>
    </header>
  );
}
