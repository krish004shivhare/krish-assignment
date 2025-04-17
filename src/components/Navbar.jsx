import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-700 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">MySite</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-indigo-200 transition duration-300 text-lg">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-indigo-200 transition duration-300 text-lg">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-indigo-200 transition duration-300 text-lg">
              Contact
            </Link>
            <Link to="/team" className="text-white hover:text-indigo-200 transition duration-300 text-lg">
              Team
            </Link>
          </div>
          
          <button 
            onClick={onLoginClick}
            className="bg-white text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-100 transition duration-300 font-medium"
          >
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;