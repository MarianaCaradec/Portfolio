import Image from "next/image";
import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="relative w-full text-gray-300">
      <Image
        src="/bg-home.jpg"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 drop-shadow-[2px_2px_0px_#000]">
        <section className="flex flex-col justify-center items-center h-screen text-center">
          <h1 className="text-4xl md:text-6xl">Mariana Caradec</h1>
          <h2 className="text-lg md:text-2xl mt-4">
            Desarrolladora Full Stack
          </h2>
          <h3 className="text-base md:text-xl mt-7">
            Experience. Trust. Solution.
          </h3>
          <a
            href="#contact"
            className="mt-6 px-6 py-3 bg-gray-500 hover:bg-[#CC4B06ff] transition rounded-lg"
          >
            Contact me
          </a>
        </section>

        <About />

        <Services />

        <Projects />

        <Contact />
      </div>
    </div>
  );
}
