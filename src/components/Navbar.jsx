import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("translate-x-[100%]");
  };

  return (
    <nav className="flex justify-between items-center py-8">
      <h1 className="text-white text-2xl font-bold">Gravity</h1>

      <div
        ref={navRef}
        className="text-white z-50 translate-x-[100%] sm:translate-x-[0] transition-all md:transition-none md:relative fixed md:top-0 top-24 left-0 md:h-0 h-full w-full flex md:flex-row flex-col items-center justify-center md:justify-end gap-3 bg-[#4737FF]"
      >
        <a className="cursor-pointer text-lg">Home</a>
        <a className="opacity-50 cursor-pointer text-lg">Our Apps</a>
        <a className="opacity-50 cursor-pointer text-lg">Clients</a>
        <a className="opacity-50 cursor-pointer text-lg">Contacts</a>
      </div>

      <div className="md:hidden" onClick={showNavbar}>
        <span className="h-1 bg-white w-10 block"></span>
        <span className="h-1 bg-white w-5 float-right block mt-2"></span>
      </div>
    </nav>
  );
};

export default Navbar;
