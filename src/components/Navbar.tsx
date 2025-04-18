const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gray-200 shadow-md p-4 flex gap-4 justify-center z-50 border-b border-gray-200">
      <a href="#hero" className="hover:text-blue-500 hover:scale-105 transition-transform duration-150">Home</a>
      <a href="#about" className="hover:text-blue-500 hover:scale-105 transition-transform duration-150">Über mich</a>
      <a href="#skills" className="hover:text-blue-500 hover:scale-105 transition-transform duration-150">Skills</a>
      <a href="#projects" className="hover:text-blue-500 hover:scale-105 transition-transform duration-150">Projekte</a>
      <a href="#contact" className="hover:text-blue-500 hover:scale-105 transition-transform duration-150">Kontakt</a>
    </nav>
  )
}

export default Navbar
