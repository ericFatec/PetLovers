import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/pet-logo.png';


interface NavBarProps {
  children: React.ReactNode;
}

class Navbar extends Component<NavBarProps> {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  

  render() {
    const { children } = this.props;

    return (
      <>
        {/* Sidebar Navbar for Large Screens */}
        <nav className="fixed top-0 left-0 h-screen bg-cat-white-100 flex flex-col items-center justify-center p-3 space-y-6 w-[11.25rem] z-10 lg:block hidden">
          {/* Logo */}
          <div className="w-40 mb-6">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col space-y-4 items-center">
            <Link to="/produtos-servicos">
              <button className="font-bold text-2xl">Produtos e Serviços</button>
            </Link>
            <Link to="/clientes">
              <button className="font-bold text-2xl">Clientes</button>
            </Link>
            <Link to="/dashboard">
              <button className="font-bold text-2xl">Dashboard</button>
            </Link>
          </div>
        </nav>

        {/* Mobile Navbar - Hidden by default and toggled with the menu button */}
        <div
          className={`lg:hidden fixed top-0 left-0 flex flex-col p-3 w-[11.25rem] h-screen bg-cat-white-100 z-20 transition-all duration-300 ease-in-out ${
            this.state.isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Logo for Mobile */}
          <div className="w-40 mb-6 p-4">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* Menu Items for Mobile */}
          <div className="flex flex-col items-center space-y-4 px-4 py-2">
            <Link to="/produtos-servicos">
              <button className="font-bold text-2xl">Produtos e Serviços</button>
            </Link>
            <Link to="/clientes">
              <button className="font-bold text-2xl">Clientes</button>
            </Link>
            <Link to="/dashboard">
              <button className="font-bold text-2xl">Dashboard</button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden fixed bottom-4 left-4 z-30">
          <button
            onClick={this.toggleMenu}
            className="bg-white rounded-full p-3 shadow-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Content Area */}
        <div className="lg:ml-[11.25rem] p-4">
          {children}
        </div>
      </>
    );
  }
}

export default Navbar;
