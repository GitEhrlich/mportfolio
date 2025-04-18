
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center">
      <img
        src="assets/profilbild.jpg"
        alt="Profilbild von Marc Ehrlich"
        className="w-80 h-60 rounded-full object-cover object-top border-4 border-white shadow-md mb-4"

      />
      <h1 className="text-5xl font-bold">Hi, ich bin Marc Ehrlich 👋</h1>


      <p className="text-xl mt-4 text-gray-600"> ( junior ) Fullstack & Webentwickler | Cloudentwickler | DevOps</p>
    </section>
  )
}

export default Hero
