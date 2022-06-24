import { Link, routes } from '@redwoodjs/router'
import { useState, useEffect } from 'react'
// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined
  height: number | undefined
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (width > 768) {
      setIsOpen(false)
    }
  }, [width])

  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  ">
        <div className="max-w-7xl mx-auto px-8 ml-1">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center md">
              <Link
                to={routes.home()}
                className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Redwood WC App
              </Link>
              {/* <a className="flex-shrink-0 h-1" href="/">
                <img
                  className="h-8 w-8"
                  src="/icons/rocket.svg"
                  alt="Workflow"
                />
              </a> */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to={routes.newWorker()}
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    New Worker
                  </Link>
                  <Link
                    to={routes.newLocation()}
                    className="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    New Location
                  </Link>
                  <Link
                    to={routes.newShift()}
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    New Shift
                  </Link>
                  <Link
                    to={routes.newWorksite()}
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    New Worksite
                  </Link>
                  <Link
                    to={routes.newShiftAssignment()}
                    className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    New Shift Assignment
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to={routes.newWorker()}
                className="text-gray-300  hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                New Worker
              </Link>
              <Link
                to={routes.newLocation()}
                className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                New Location
              </Link>
              <Link
                to={routes.newShift()}
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                New Shift
              </Link>

              <Link
                to={routes.newWorksite()}
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                New Worksite
              </Link>
              <Link
                to={routes.newShiftAssignment()}
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                New Shift Assignment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar

/// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}
