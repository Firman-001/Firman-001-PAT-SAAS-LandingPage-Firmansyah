import React from 'react';

class Header extends React.Component {
  render() {
    return (
  
      <nav className="bg-gray-400 shadow-lg ">
        
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex justify-between items-center h-16 ">
            <div className="flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dhyq9uts4/image/upload/v1676360444/logo_v09np1.png"
                alt="Logo SMK TI Bazma"
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <a
                href="#Home"
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#profil-sekolah"
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Profil Sekolah
              </a>
              <a
                href="#Kemitraan"
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Kemitraan
              </a>
              <a
                href="#Donasi"
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Donasi
              </a>
              <a
                href="#PPDB"
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                PPDB
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
