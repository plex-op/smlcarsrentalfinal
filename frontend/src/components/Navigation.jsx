import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/smllogo.png"; // your logo

const Navbar = ({ isAuthenticated, user, onLogout }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars-static" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-blue-100 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* WhatsApp Sell Car Button */}
            <a
              href="https://wa.link/pzu1wz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-all shadow-sm flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.55 0 .29 5.26.29 11.74c0 2.07.54 4.1 1.57 5.9L0 24l6.53-1.7a11.74 11.74 0 0 0 5.5 1.4h.02c6.48 0 11.74-5.26 11.74-11.74 0-3.14-1.22-6.09-3.47-8.38zM12.02 21.3h-.02a9.57 9.57 0 0 1-4.86-1.32l-.35-.2-3.87 1.01 1.04-3.77-.23-.39a9.56 9.56 0 0 1-1.48-5.12c0-5.27 4.29-9.56 9.58-9.56 2.55 0 4.95 1 6.76 2.8a9.48 9.48 0 0 1 2.81 6.75c0 5.27-4.29 9.56-9.58 9.56zm5.43-7.23c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.29-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.2 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.5 1.7.64.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.31.17-1.42-.07-.1-.27-.17-.57-.32z" />
              </svg>
              Want to Sell Your Car?
            </a>

            {/* Admin Section */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4 border-l pl-4 border-blue-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-800 font-medium">
                    {user?.username || "Admin"}
                  </span>
                </div>

                <button
                  onClick={onLogout}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className={`px-5 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm ${
                  isActive("/login") ? "ring-2 ring-blue-300" : ""
                }`}
              >
                Admin Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden pb-6 border-t border-blue-100 mt-2 pt-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Sell Car Button */}
              <a
                href="https://wa.link/pzu1wz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium text-center hover:bg-green-700 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.55 0 .29 5.26.29 11.74c0 2.07.54 4.1 1.57 5.9L0 24l6.53-1.7a11.74 11.74 0 0 0 5.5 1.4h.02c6.48 0 11.74-5.26 11.74-11.74 0-3.14-1.22-6.09-3.47-8.38zM12.02 21.3h-.02a9.57 9.57 0 0 1-4.86-1.32l-.35-.2-3.87 1.01 1.04-3.77-.23-.39a9.56 9.56 0 0 1-1.48-5.12c0-5.27 4.29-9.56 9.58-9.56 2.55 0 4.95 1 6.76 2.8a9.48 9.48 0 0 1 2.81 6.75c0 5.27-4.29 9.56-9.58 9.56zm5.43-7.23c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.29-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.2 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.5 1.7.64.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.31.17-1.42-.07-.1-.27-.17-.57-.32z" />
                </svg>
                Want to Sell Your Car?
              </a>

              {isAuthenticated ? (
                <div className="pt-3 border-t border-blue-100 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-blue-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-800 font-medium">
                      {user?.username || "Admin"}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setIsMobileOpen(false);
                      onLogout();
                    }}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all text-sm font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-700 transition-all shadow-sm"
                >
                  Admin Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
