import Logo from '../download.png';

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import NavBarButton from './NavbarButton';


function Navbar() { 
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className ="shadow-lg">
      <nav className="bg-gray-800 content-center w-full p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center content-center w-full">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center content-center w-full">
            
              <div className="flex-shrink-0 rounded-lg">
                <img
                  className="h-12 w-12"
                  src={Logo}
                  alt="Logo"
                />
              </div>

              <div className="hidden md:block content-center w-full">
                <div className="ml-10 flex items-baseline space-x-4 content-center w-full">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <NavBarButton name = "Menu" full = "True" />
                  <NavBarButton name = "Contact Us" full = "True" />
                  <NavBarButton name = "Cart" full = "True" />
                  <NavBarButton name = "Your Account" full = "True" />
                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                  <NavBarButton name = "Menu" full = "False" />
                  <NavBarButton name = "Contact Us" full = "False" />
                  <NavBarButton name = "Cart" full = "False" />
                  <NavBarButton name = "Your Account" full = "False" />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;