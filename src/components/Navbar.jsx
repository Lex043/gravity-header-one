import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-10 px-3 lg:px-20">
      <h1 className="text-white text-2xl font-bold">Gravity</h1>
      <div className="hidden md:flex">
        <ul className="text-white flex gap-4 text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="opacity-50 cursor-pointer">Our Apps</li>
          <li className="opacity-50 cursor-pointer">Clients</li>
          <li className="opacity-50 cursor-pointer">Contacts</li>
        </ul>
      </div>
      <div className="md:hidden">
        <span className="h-1 bg-white w-10 block"></span>
        <span className="h-1 bg-white w-5 float-right block mt-2"></span>
      </div>
    </nav>
  );
};

export default Navbar;
