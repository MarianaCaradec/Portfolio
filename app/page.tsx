import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full text-white">
      <Image
        src="/bg-home.jpg"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Welcome section */}
        <section className="flex flex-col justify-center items-center h-screen text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Mariana Caradec</h1>
          <p className="text-lg md:text-2xl mt-4">Desarrolladora Full Stack</p>
          <a
            href="#contact"
            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg"
          >
            Contáctame
          </a>
        </section>

        {/* About Me */}
        <section id="about" className="py-20 px-6 bg-gray-900 text-center">
          <h2 className="text-3xl font-bold">Sobre Mí</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Soy una programadora apasionada por crear aplicaciones eficientes y
            escalables.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6 bg-gray-800 text-center">
          <h2 className="text-3xl font-bold">Proyectos</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Aquí puedes ver algunos de mis proyectos destacados.
          </p>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-6 bg-gray-900 text-center">
          <h2 className="text-3xl font-bold">Servicios</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Ofrezco desarrollo web, optimización y consultoría técnica.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-gray-800 text-center">
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            ¡Hablemos! Envíame un mensaje para colaborar en tu próximo proyecto.
          </p>
        </section>
      </div>
    </div>
  );
}
