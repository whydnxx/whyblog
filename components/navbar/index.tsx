import { useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-4xl mx-auto px-4 p-2 md:px-6 md:my-8 lg:p-8">
      <div className="flex items-center justify-between h-16">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 text-gray-400 focus:outline-none"
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
        <div className="md:flex md:justify-between w-full">
          <a className="flex title-font font-medium items-center text-gray-900">
            <span className="text-xl uppercase mx-auto">whyblog</span>
          </a>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 text-gray-900">
              <a href="#" className="px-3 py-2 font-medium">
                Home
              </a>
              <a href="#" className="px-3 py-2 font-medium">
                Blog
              </a>
              <a href="#" className="px-3 py-2 font-medium">
                About
              </a>
            </div>
          </div>
        </div>
        <div className="md:hidden"></div>
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
              <a href="#" className="block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium">
                Blog
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium">
                About
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
